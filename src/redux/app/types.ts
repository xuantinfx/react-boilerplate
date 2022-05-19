import { SupportedLanguage } from '../../globals/constants';

export const TOGGLE_MOBILE_NAVBAR = 'TOGGLE_MOBILE_NAVBAR';
export const TOGGLE_INVENTORY_FILTER = 'TOGGLE_INVENTORY_FILTER';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const OPEN_ERROR_MODAL = 'OPEN_ERROR_MODAL';
export const CLOSE_ERROR_MODAL = 'CLOSE_ERROR_MODAL';
export const SET_APP_LANGUAGE = 'SET_APP_LANGUAGE';

export interface AppState {
  mobileNavbarVisible: boolean;
  inventoryFilterVisible: boolean;
  sidebarVisible: boolean;
  isOpenErrorModal: boolean;
  errorModalMessage?: string;
  selectedLang: SupportedLanguage;
}
