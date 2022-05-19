import { IAction } from 'src/redux/types';
import * as Types from './types';

const initialState: Types.AuthState = {
  autoLoginChecked: false,
  signedIn: false,
  isSigningIn: false,
  signInSuccess: false,
  signInErrorMessage: undefined,
};

const authReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case Types.SIGN_IN_REQUEST:
      return {
        ...state,
        isSigningIn: true,
      };
    case Types.SIGN_IN_SUCCESS:
      return {
        ...state,
        autoLoginChecked: true,
        isSigningIn: false,
        signInSuccess: true,
        signedIn: true,
      };
    case Types.SIGN_IN_FAILURE:
      return {
        ...state,
        autoLoginChecked: true,
        isSigningIn: false,
        signInSuccess: false,
        signedIn: false,
        signInErrorMessage: action.payload.errorMessage,
      };
    case Types.SIGN_OUT:
      return {
        ...state,
        autoLoginChecked: true,
        signedIn: false,
        isSigningIn: false,
        signInSuccess: false,
        signInErrorMessage: undefined,
      };
    default:
      return state;
  }
};

export default authReducer;
