import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ path, ...props }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
