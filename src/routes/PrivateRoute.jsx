import { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import LoadingState from '../components/LoadingState';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    const location = useLocation();

    if (loading) { return <LoadingState></LoadingState> };
    if (user) { return children };

    return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;