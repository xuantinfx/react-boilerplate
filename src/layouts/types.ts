export interface INavigationLink {
  label: string;
  route: string;
  activeOnlyWhenExact: any;
  matchRoutes?: string[];
}
