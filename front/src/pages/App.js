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
                            {/*<Route path="classes" element={<TeacherClasses />} />*/}
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
