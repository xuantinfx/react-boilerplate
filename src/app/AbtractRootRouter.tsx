import { RoutePath } from 'src/globals/constants';
import LoginPage from 'src/pages/Login/Login';
import ProfilePage from 'src/pages/Profile/Profile';
import { HomePage } from 'src/pages/Home';

export const PublicRoutes = [
  {
    path: RoutePath.ROOT,
    component: HomePage,
    exact: true,
  },
];

// @ts-ignore
export const PrivateRoutes = [
  {
    path: RoutePath.PROFILE,
    component: ProfilePage,
    exact: true,
  },
];

export const OnlyPublicRoutes = [
  {
    path: RoutePath.LOGIN,
    component: LoginPage,
    exact: true,
  },
];
