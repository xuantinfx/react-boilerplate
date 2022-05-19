import { SupportedLanguage } from '../../globals/constants';
import * as Types from './types';

export const toggleMobileNavbar = (visible: boolean) => {
  return {
    type: Types.TOGGLE_MOBILE_NAVBAR,
    payload: visible,
  };
};

export const toggleInventoryFilter = (visible: boolean) => {
  return {
    type: Types.TOGGLE_INVENTORY_FILTER,
    payload: visible,
  };
};

export const toggleSideBar = (visible?: boolean) => {
  return {
    type: Types.TOGGLE_SIDEBAR,
    payload: visible,
  };
};

export const openErrorModal = (errorMessage: string) => {
  return {
    type: Types.OPEN_ERROR_MODAL,
    payload: {
      errorMessage,
    },
  };
};

export const closeErrorModal = () => {
  return {
    type: Types.CLOSE_ERROR_MODAL,
  };
};

export const setAppLanguage = (lang: SupportedLanguage) => {
  return {
    type: Types.SET_APP_LANGUAGE,
    payload: lang,
  };
};
