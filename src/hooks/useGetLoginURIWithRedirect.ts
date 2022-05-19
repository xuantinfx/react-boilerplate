import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import { RoutePath } from 'src/globals/constants';

const useGetLoginURIWithRedirect = () => {
  const history = useHistory();
  const { pathname, search } = useLocation();
  const [loginURI, setLoginURI] = useState<string>(RoutePath.LOGIN);
  useEffect(() => {
    const currentURI = getURIWithQueryParams(pathname, search);
    setLoginURI(getLoginURIWithRedirect(currentURI));
  }, [history, pathname, search]);
  return loginURI;
};

export default useGetLoginURIWithRedirect;

const getURIWithQueryParams = (pathname: string, search?: string) => {
  if (isEmpty(search)) return pathname;
  return `${pathname}?${search}`;
};

const getLoginURIWithRedirect = (current?: string) => {
  if (isNil(current)) return RoutePath.LOGIN;
  const encodeRedirectURI = encodeURIComponent(current);
  return `${RoutePath.LOGIN}?redirect=${encodeRedirectURI}`;
};
