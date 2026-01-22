import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function ProtectedRoute({ children, role }) {

    console.warn(role);
    const { user, loading } = useContext(AuthContext);
    console.error(user);
    if (loading) return null;
    if (!user) return <Navigate to="/login" replace />;
    if (role && user.role !== role) return <Navigate to="/unauthorized" replace />;

    return children;
}
