import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getQuestionRanking } from '@/services/activityGameService.js';
import { AuthContext } from '@/contexts/AuthContext.js';
import { Button } from '@/components/ui/button';
import Icon from "@/components/Icon.js";

const MEDAL = ['🥇', '🥈', '🥉'];

function PodiumCard({ entry, highlight }) {
    return (
        <div className={`flex items-center gap-3 px-4 py-3 rounded-xl ${highlight ? 'bg-yellow-400/20 border border-yellow-400' : 'bg-white/10'}`}>
            <span className="text-2xl">{MEDAL[entry.position - 1] || entry.position}</span>
            <div className="flex-1 min-w-0">
                <p className={`font-bold truncate ${highlight ? 'text-yellow-300' : 'text-white'}`}>
                    {entry.name}
                    {highlight && <span className="ml-2 text-xs font-normal text-yellow-300/70">(você)</span>}
                </p>
            </div>
            <span className="text-white/80 font-mono text-sm">{entry.xp} XP</span>
        </div>
    );
}

export default function ActivityResultPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(AuthContext);

    const state = location.state || {};
    const {
        finished,
        totalXp,
        totalQuestions,
        questionId,
        activityId,
        is_correct,
        xp,
        correct_answer_id,
        answers,
        selectedAnswerId,
        timeout,
    } = state;

    const [ranking, setRanking] = useState(null);
    const [currentUserPosition, setCurrentUserPosition] = useState(null);
    const [loadingRanking, setLoadingRanking] = useState(false);

    useEffect(() => {
        if (finished || !questionId) return;
        setLoadingRanking(true);
        getQuestionRanking(id, questionId)
            .then((res) => {
                const data = res.data?.data;
                setRanking(data?.top3 || []);
                setCurrentUserPosition(data?.currentUserPosition || null);
            })
            .catch(() => setRanking([]))
            .finally(() => setLoadingRanking(false));
    }, [id, questionId, finished]);

    function handleNext() {
        navigate(`/student/activity/${id}/play`);
    }

    function handleFinish() {
        navigate('/student/activity');
    }

    if (finished) {
        return (
            <div className="fixed inset-0 bg-purple-700 flex flex-col items-center justify-center gap-8 z-50 px-6">
                <Icon name="Trophy" className="text-gold w-50 h-50" />
                <h1 className="text-white text-3xl font-bold text-center">Atividade Concluída!</h1>
                <div className="bg-white/10 rounded-2xl px-10 py-6 text-center">
                    <p className="text-white/70 text-sm mb-1">XP Total</p>
                    <p className="text-yellow-300 text-5xl font-bold">{totalXp ?? 0}</p>
                </div>
                <p className="text-white/60 text-sm">{totalQuestions} pergunta{totalQuestions !== 1 ? 's' : ''} respondida{totalQuestions !== 1 ? 's' : ''}</p>
                <Button
                    size="lg"
                    className="bg-white text-purple-700 hover:bg-white/90 font-bold px-10"
                    onClick={handleFinish}
                >
                    Voltar para Atividades
                </Button>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-purple-700 flex flex-col z-50 overflow-y-auto">
            <div className="flex flex-col items-center gap-6 px-6 py-10 max-w-lg mx-auto w-full">
                <div className={`text-7xl ${is_correct ? 'animate-bounce' : ''}`}>
                    {is_correct && <Icon name="Check" className="text-green-500 w-50 h-50" /> }
                    {!is_correct && <Icon name="X" className="text-red-500 w-50 h-50" /> }
                </div>

                <div className="text-center">
                    <h2 className={`text-3xl font-bold ${is_correct ? 'text-green-400' : 'text-red-400'}`}>
                        {timeout ? 'Tempo esgotado!' : is_correct ? 'Correto!' : 'Errado!'}
                    </h2>
                    {is_correct && (
                        <p className="text-yellow-300 text-2xl font-bold mt-1">+{xp} XP</p>
                    )}
                </div>

                {correct_answer_id && answers && (
                    <div className="w-full bg-white/10 rounded-xl p-4">
                        <p className="text-white/60 text-xs mb-2 uppercase tracking-wide">Resposta correta</p>
                        <p className="text-green-300 font-semibold">
                            {answers.find((a) => a.id === correct_answer_id)?.text ||
                             answers.find((a) => a.id === correct_answer_id)?.title ||
                             '—'}
                        </p>
                    </div>
                )}

                <div className="w-full">
                    <p className="text-white/60 text-sm mb-3 uppercase tracking-wide text-center">Pódio desta pergunta</p>
                    {loadingRanking && (
                        <div className="text-white/50 text-center animate-pulse">Carregando ranking...</div>
                    )}
                    {!loadingRanking && ranking && ranking.length === 0 && (
                        <p className="text-white/40 text-center text-sm">Nenhum resultado ainda.</p>
                    )}
                    {!loadingRanking && ranking && ranking.length > 0 && (
                        <div className="flex flex-col gap-2">
                            {ranking.map((entry) => (
                                <PodiumCard key={entry.position} entry={entry} highlight={entry.isCurrentUser} />
                            ))}
                            {currentUserPosition && currentUserPosition > 3 && (
                                <div className="mt-2 text-center text-white/50 text-sm">
                                    Sua posição nesta pergunta: <span className="text-white font-bold">{currentUserPosition}º</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <Button
                    size="lg"
                    className="bg-white text-purple-700 hover:bg-white/90 font-bold px-10 w-full mt-4 cursor-pointer"
                    onClick={handleNext}
                >
                    Próxima Pergunta →
                </Button>
            </div>
        </div>
    );
}
