import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = ({ children, ...rest }) => {
  return <Route {...rest} />;
};

export default PublicRoute;
