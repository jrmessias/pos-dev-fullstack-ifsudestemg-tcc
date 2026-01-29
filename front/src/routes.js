import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

import TeacherDashboard from './pages/teacher/Dashboard';
import StudentDashboard from './pages/student/Dashboard';
import Login from './pages/Login';
import Home from './pages/Home';
import Unauthorized from './pages/Unauthorized';

export default function AppRoutes() {
    return <>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/unauthorized" element={<Unauthorized />} />

                    <Route
                        path="/teacher"
                        element={
                            <ProtectedRoute role="teacher">
                                <TeacherDashboard />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/student"
                        element={
                            <ProtectedRoute role="student">
                                <StudentDashboard />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </>
}
