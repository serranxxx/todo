import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { appContext } from '../context';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { isLogged } = useContext(appContext);
    const redirectPath = isLogged ? '/todo/home' : '/todo/login';

    return (
      <>
        <WrappedComponent {...props} />
        <Navigate to={redirectPath} />
      </>
    );
  };
};

export default withAuth;



