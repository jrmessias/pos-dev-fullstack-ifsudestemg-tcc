import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthProvider} from "../contexts/AuthContext.js";
import Home from "./Home.js";
import UnauthorizedPage from "./errors/UnauthorizedPage.js";
import NotFoundPage from "./errors/NotFoundPage.js";
import LayoutAuth from "../layouts/LayoutAuth.js";
import Login from "./Login.js";
import ProtectedRoute from "../components/ProtectedRoute.js";
import LayoutSystem from "../layouts/LayoutSystem.js";
import Dashboard from "./dashboard/Dashboard.js";
import InternalServerErrorPage from "./errors/InternalServerErrorPage.js";
import ForbiddenPage from "./errors/ForbiddenPage.js";
import MaintenancePage from "./errors/MaintenancePage.js";
import ClassIndexPage from "./teacher/ClassIndexPage.js";
import DisciplineIndexPage from "./teacher/DisciplineIndexPage.js";
import ActivityIndexPage from "./teacher/ActivityIndexPage.js";
import AnswerIndexPage from "./teacher/AnswerIndexPage.js";
import GameIndexPage from "./teacher/GameIndexPage.js";

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

                    {/* Rota Pública - Login */}
                    <Route element={<LayoutAuth />}>
                        <Route path="/login" element={<Login />} />
                    </Route>

                    {/* Rota Privada - Sistema (protegida) */}
                    {/* Área do Professor - Protegida */}
                    <Route element={<ProtectedRoute role='teacher' />}>
                        <Route path="/teacher" element={<LayoutSystem />}>
                            <Route index element={<Dashboard />} />
                            <Route path="class" element={<ClassIndexPage />} />
                            <Route path="discipline" element={<DisciplineIndexPage />} />
                            <Route path="activity" element={<ActivityIndexPage />} />
                            <Route path="answer" element={<AnswerIndexPage />} />
                            <Route path="game" element={<GameIndexPage />} />
                        </Route>
                    </Route>

                    {/* Área do Aluno - Protegida */}
                    <Route element={<ProtectedRoute role='student' />}>
                        <Route path="/student" element={<LayoutSystem />}>
                            <Route index element={<Dashboard />} />
                            {/*<Route path="courses" element={<StudentCourses />} />*/}
                        </Route>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </>
}

export default App
