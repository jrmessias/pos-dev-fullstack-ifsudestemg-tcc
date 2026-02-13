import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthProvider} from "../contexts/AuthContext.js";
import Home from "./Home.js";
import NotFoundPage from "./errors/NotFoundPage.js";
import LayoutAuth from "../layouts/LayoutAuth.js";
import Login from "./Login.js";
import Register from "./Register.js";
import ProtectedRoute from "../components/ProtectedRoute.js";
import LayoutSystem from "../layouts/LayoutSystem.js";
import Dashboard from "./dashboard/Dashboard.js";
import ForbiddenPage from "./errors/ForbiddenPage.js";
import DisciplineIndexTeacherPage from "./teacher/DisciplineIndexTeacherPage.js";
import DisciplineStudentsPage from "./teacher/DisciplineStudentsPage.js";
import ActivityIndexTeacherPage from "./teacher/ActivityIndexTeacherPage.js";
import ActivityCreateTeacherPage from "./teacher/ActivityCreateTeacherPage.js";
import AnswerIndexTeacherPage from "./teacher/AnswerIndexTeacherPage.js";
import GameIndexTeacherPage from "./teacher/GameIndexTeacherPage.js";
import DisciplineIndexStudentPage from "./student/DisciplineIndexStudentPage.js";
import ActivityIndexStudentPage from "./student/ActivityIndexStudentPage.js";
import ProgressIndexStudentPage from "./student/ProgressIndexStudentPage.js";

function App() {
    return <>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    {/* Rota Pública - Home */}
                    <Route path="/" element={<Home/>}/>

                    {/* Rota Pública - Erros */}
                    <Route path="/unauthorized" element={<ForbiddenPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>

                    {/* Rotas Públicas - Login e Registro */}
                    <Route element={<LayoutAuth/>}>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </Route>

                    {/* Rota Privada - Sistema (protegida) */}
                    {/* Área do Professor - Protegida */}
                    <Route element={<ProtectedRoute role='teacher'/>}>
                        <Route path="/teacher" element={<LayoutSystem/>}>
                            <Route index element={<Dashboard/>}/>
                            <Route path="discipline" element={<DisciplineIndexTeacherPage/>}/>
                            <Route path="discipline/:id/students" element={<DisciplineStudentsPage/>}/>
                            <Route path="activity" element={<ActivityIndexTeacherPage/>}/>
                            <Route path="activity/new" element={<ActivityCreateTeacherPage/>}/>
                            <Route path="answer" element={<AnswerIndexTeacherPage/>}/>
                            <Route path="game" element={<GameIndexTeacherPage/>}/>
                        </Route>
                    </Route>

                    {/* Área do Aluno - Protegida */}
                    <Route element={<ProtectedRoute role='student'/>}>
                        <Route path="/student" element={<LayoutSystem/>}>
                            <Route index element={<Dashboard/>}/>
                            <Route path="discipline" element={<DisciplineIndexStudentPage />} />
                            <Route path="activity" element={<ActivityIndexStudentPage />} />
                            <Route path="progress" element={<ProgressIndexStudentPage />} />
                        </Route>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </>
}

export default App
