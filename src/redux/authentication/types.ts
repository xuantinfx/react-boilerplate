export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const SIGN_OUT = 'SIGN_OUT';

export interface AuthState {
  autoLoginChecked: boolean;
  signedIn: boolean;
  isSigningIn: boolean;
  signInSuccess: boolean;
  signInErrorMessage?: string;
}
