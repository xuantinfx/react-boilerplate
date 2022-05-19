import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';
import React from 'react';
import isEmpty from 'lodash/isEmpty';
import queryString from 'query-string';
import useAuth from 'src/hooks/useAuth';
import Loading from 'src/pages/Loading';
import { RoutePath } from 'src/globals/constants';

interface IOnlyPublicRouteProps extends RouteProps {
  redirectTo: string;
}

const OnlyPublicRoute: React.FC<IOnlyPublicRouteProps> = ({
  path,
  component,
  exact,
  redirectTo,
}) => {
  const [signedIn, autoLoginChecked] = useAuth();
  const { search } = useLocation();
  if (autoLoginChecked) {
    if (!signedIn) {
      return <Route path={path} component={component} exact={exact} />;
    }
    const redirectURI = getRedirectURI(search, redirectTo);
    return <Redirect to={redirectURI} />;
  }
  return <Loading />;
};

export default OnlyPublicRoute;

const getRedirectURI = (search?: string, defaultRedirect?: string) => {
  if (isEmpty(search)) return defaultRedirect || RoutePath.ROOT;
  const queryParams = queryString.parse(search as string);
  if (isEmpty(queryParams.redirect)) return defaultRedirect || RoutePath.ROOT;
  return decodeURIComponent(queryParams.redirect as string);
};
