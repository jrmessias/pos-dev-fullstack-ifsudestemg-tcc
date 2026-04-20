import React, { useEffect, useRef, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { startActivity, submitAnswer } from '@/services/activityGameService.js';
import { AuthContext } from '@/contexts/AuthContext.js';

const ANSWER_COLORS = [
    'bg-red-500 hover:bg-red-400',
    'bg-blue-500 hover:bg-blue-400',
    'bg-yellow-500 hover:bg-yellow-400',
    'bg-green-500 hover:bg-green-400',
];

const API_BASE = import.meta.env.VITE_API_URL.replace(/\/api\/?$/, '');

export default function ActivityPlayPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [gameData, setGameData] = useState(null);
    const [timeLeft, setTimeLeft] = useState(null);
    const [answered, setAnswered] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const startTimeRef = useRef(null);
    const timerRef = useRef(null);
    const submittingRef = useRef(false);

    function clearTimer() {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }

    async function loadNextQuestion() {
        setLoading(true);
        setAnswered(false);
        submittingRef.current = false;
        clearTimer();
        try {
            const res = await startActivity(id);
            const data = res.data?.data;
            if (data?.finished) {
                navigate(`/student/activity/${id}/result`, {
                    state: { finished: true, totalXp: data.totalXp, totalQuestions: data.totalQuestions },
                });
                return;
            }
            setGameData(data);
            setTimeLeft(data.activity.timeLimitSeconds);
            startTimeRef.current = Date.now();
        } catch {
            setError('Não foi possível carregar a atividade.');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadNextQuestion();
        
        const handlePopState = (event) => {
            event.preventDefault();
            window.history.pushState(null, '', window.location.href);
        };
        
        window.history.pushState(null, '', window.location.href);
        window.addEventListener('popstate', handlePopState);
        
        return () => {
            clearTimer();
            window.removeEventListener('popstate', handlePopState);
        };
    }, [id]);

    useEffect(() => {
        if (timeLeft === null || answered) return;

        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    handleTimeout();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearTimer();
    }, [gameData, answered]);

    async function handleTimeout() {
        if (submittingRef.current) return;
        submittingRef.current = true;
        setAnswered(true);
        clearTimer();

        try {
            const res = await submitAnswer(id, {
                question_id: gameData.question.id,
                answer_id: null,
                answer_time: gameData.activity.timeLimitSeconds,
            });
            const result = res.data?.data;
            navigate(`/student/activity/${id}/result`, {
                state: {
                    finished: false,
                    questionId: gameData.question.id,
                    activityId: Number(id),
                    is_correct: result?.is_correct ?? false,
                    xp: result?.xp ?? 0,
                    correct_answer_id: result?.correct_answer_id,
                    answers: gameData.question.answers,
                    timeout: true,
                },
            });
        } catch {
            navigate(`/student/activity/${id}/result`, {
                state: {
                    finished: false,
                    questionId: gameData.question.id,
                    activityId: Number(id),
                    is_correct: false,
                    xp: 0,
                    correct_answer_id: null,
                    answers: gameData.question.answers,
                    timeout: true,
                },
            });
        }
    }

    async function handleAnswer(answerId) {
        if (answered || submittingRef.current) return;
        submittingRef.current = true;
        setAnswered(true);
        clearTimer();

        const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
        const answerTime = Math.min(elapsed, gameData.activity.timeLimitSeconds);

        try {
            const res = await submitAnswer(id, {
                question_id: gameData.question.id,
                answer_id: answerId,
                answer_time: answerTime,
            });
            const result = res.data?.data;
            navigate(`/student/activity/${id}/result`, {
                state: {
                    finished: false,
                    questionId: gameData.question.id,
                    activityId: Number(id),
                    is_correct: result?.is_correct ?? false,
                    xp: result?.xp ?? 0,
                    correct_answer_id: result?.correct_answer_id,
                    answers: gameData.question.answers,
                    selectedAnswerId: answerId,
                    timeout: false,
                },
            });
        } catch {
            navigate(`/student`);
        }
    }

    if (loading) {
        return (
            <div className="fixed inset-0 bg-purple-700 flex items-center justify-center z-50">
                <div className="text-white text-xl animate-pulse">Carregando...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="fixed inset-0 bg-purple-700 flex items-center justify-center z-50">
                <div className="text-white text-xl">{error}</div>
            </div>
        );
    }

    if (!gameData) return null;

    const { activity, question, questionNumber, totalQuestions } = gameData;
    const isUrgent = timeLeft !== null && timeLeft <= 5;
    const timeLimitSeconds = activity.timeLimitSeconds;
    const progress = timeLeft !== null ? (timeLeft / timeLimitSeconds) * 100 : 100;

    return (
        <div className="fixed inset-0 bg-purple-700 flex flex-col z-50 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-3 bg-purple-900/60">
                <div className="text-white/80 text-sm font-medium">
                    {activity.name}
                </div>
                <div className="text-white/60 text-sm">
                    {questionNumber} / {totalQuestions}
                </div>
                <div className={`text-2xl font-bold tabular-nums transition-colors ${isUrgent ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                    {timeLeft}s
                </div>
            </div>

            <div className="h-1 bg-purple-900/40">
                <div
                    className="h-full bg-white/30 transition-all duration-1000"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center px-6 py-4 gap-4">
                <p className="text-white text-2xl font-bold text-center max-w-2xl leading-snug">
                    {question.name}
                </p>
                {question.text && (
                    <p className="text-white text-xl text-center max-w-2xl">
                        {question.text}
                    </p>
                )}
                {question.image && /^\/uploads\/questions\/.+\.(jpg|jpeg|png)$/i.test(question.image) ? (
                    <img
                        src={`${API_BASE}${question.image}`}
                        alt="Imagem da questão"
                        className="max-h-40 rounded-xl object-contain"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                ) : null}
            </div>

            <div className="grid grid-cols-2 gap-3 px-4 pb-6">
                {question.answers.map((answer, index) => (
                    <button
                        key={answer.id}
                        disabled={answered}
                        onClick={() => handleAnswer(answer.id)}
                        className={`
                            ${ANSWER_COLORS[index % ANSWER_COLORS.length]}
                            text-white font-bold text-lg rounded-2xl py-6 px-4
                            transition-all duration-150 active:scale-95
                            disabled:opacity-60 disabled:cursor-not-allowed
                            flex items-center gap-3
                        `}
                    >
                        <span className="text-2xl">
                            {['▲', '◆', '●', '■'][index % 4]}
                        </span>
                        <span>{answer.text || answer.title}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
