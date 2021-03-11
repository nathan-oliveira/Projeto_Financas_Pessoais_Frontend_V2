import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { error, data } = useSelector(state => state.user)

  if (!error && data?.token) return <Route {...props} />;
  else if (data?.token === null) return <Navigate to="/login" />;
  else return <Navigate to="/login" />;
}

export default ProtectedRoute;