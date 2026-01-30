import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import {AuthProvider} from './contexts/AuthContext';

import Login from './pages/Login';
import Home from './pages/Home';
import Unauthorized from './pages/Unauthorized';
import Dashboard from "./pages/dashboard/Dashboard.js";
import NotFound from "./pages/NotFound.js";
import LayoutSystem from "./layouts/LayoutSystem.js";
import LayoutAuth from "./layouts/LayoutAuth.js";

export default function AppRoutes() {

    return <>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    {/* Rota Pública - Home */}
                    <Route path="/" element={<Home/>}/>

                    {/* Rota Pública - Erros */}
                    <Route path="/unauthorized" element={<Unauthorized/>}/>
                    <Route path="*" element={<NotFound/>}/>

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
