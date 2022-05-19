import { Route } from 'react-router-dom';
import React from 'react';
import useAuth from '../hooks/useAuth';
import Loading from '../pages/Loading';
import PermissionsDenied from '../pages/PermissionsDenied';

interface IPrivateRouteProps {
  path: string;
  component: React.ComponentType<any>;
  exact: boolean;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({ path, component, exact }) => {
  const [signedIn, autoLoginChecked] = useAuth();
  if (autoLoginChecked) {
    if (signedIn) {
      return <Route path={path} component={component} exact={exact} />;
    }
    return <PermissionsDenied />;
  }
  return <Loading />;
};

export default PrivateRoute;
