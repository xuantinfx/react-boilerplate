import { Dispatch } from 'redux';
import * as Types from './types';

const signInRequest = () => {
  return {
    type: Types.SIGN_IN_REQUEST,
  };
};

export const signIn = () => {
  return (dispatch: Dispatch) => {
    dispatch(signInRequest());
  };
};
