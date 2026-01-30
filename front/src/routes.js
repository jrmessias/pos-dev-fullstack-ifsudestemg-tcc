import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

import Login from './pages/Login';
import Home from './pages/Home';
import Unauthorized from './pages/Unauthorized';
import Dashboard from "./pages/dashboard/Dashboard.js";
import NotFound from "./pages/NotFound.js";

export default function AppRoutes() {
    return <>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/unauthorized" element={<Unauthorized />} />
                    <Route path="*" element={<NotFound />} />

                    <Route
                        path="/teacher"
                        element={
                            <ProtectedRoute role="teacher">
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/student"
                        element={
                            <ProtectedRoute role="student">
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </>
}
