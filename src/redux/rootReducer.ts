import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authentication';
import { appReducer } from './app';
import { dashboardReducer } from './dashboard';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
