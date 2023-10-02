import React, { useContext } from 'react';
import { Link, Navigate, Redirect } from 'react-router-dom';
import { appContext } from '../context';


const withAuth = (WrappedComponent) => {
  return (props) => {
    const { isLogged } = useContext(appContext);

    if (isLogged) {
      return <WrappedComponent {...props} />;
    } else {
      return <Navigate to="/login" />;
    }
  };
};

export default withAuth;