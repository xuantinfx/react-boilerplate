import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { SupportedLanguage } from 'src/globals/constants';
import { IAction } from '../types';
import * as Types from './types';

const initialState: Types.AppState = {
  mobileNavbarVisible: false,
  inventoryFilterVisible: false,
  sidebarVisible: false,
  isOpenErrorModal: false,
  errorModalMessage: undefined,
  selectedLang: SupportedLanguage.VI,
};

const appReducer = (state = initialState, action: IAction): Types.AppState => {
  switch (action.type) {
    case Types.TOGGLE_MOBILE_NAVBAR:
      return {
        ...state,
        mobileNavbarVisible: action.payload,
      };

    case Types.TOGGLE_INVENTORY_FILTER:
      return {
        ...state,
        inventoryFilterVisible: action.payload,
      };

    case Types.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarVisible: action.payload ?? !state.sidebarVisible,
      };

    case Types.OPEN_ERROR_MODAL:
      return {
        ...state,
        isOpenErrorModal: true,
        errorModalMessage: action.payload.errorMessage,
      };

    case Types.CLOSE_ERROR_MODAL:
      return {
        ...state,
        isOpenErrorModal: false,
        errorModalMessage: undefined,
      };

    case Types.SET_APP_LANGUAGE:
      return {
        ...state,
        selectedLang: action.payload,
      };

    default:
      return state;
  }
};

export default persistReducer(
  {
    storage,
    key: 'app',
    whitelist: ['selectedLang', 'filterConfigs'],
  },
  appReducer
);
