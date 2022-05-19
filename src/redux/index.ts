import configureStore from './store';
import { AuthTypes } from './authentication';
import { AppTypes } from './app';
import { DashboardTypes } from './dashboard';

export const { store, persistor } = configureStore();

export interface RootReducerState {
  auth: AuthTypes.AuthState;
  app: AppTypes.AppState;
  dashboard: DashboardTypes.DashboardState;
}

export * from './authentication';
export * from './app';
export * from './dashboard';
