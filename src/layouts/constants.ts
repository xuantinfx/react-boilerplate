import { MenuLabel, RoutePath } from 'src/globals/constants';
import { INavigationLink } from './types';

export const MainLinks: INavigationLink[] = [
  {
    label: MenuLabel.DASHBOARD,
    route: RoutePath.DASHBOARD,
    activeOnlyWhenExact: true,
  },
];

export const ProfileLinks: INavigationLink[] = [];
