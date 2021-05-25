import { SAVE_LOGIN_DETAILS, GET_LOGIN } from './action-types';

export const saveLogin = (loginDetails) => {
  return {
    type: SAVE_LOGIN_DETAILS,
    payload: loginDetails,
  };
};

export const savedLoginSuccess = (loginData) => {
  return {
    type: SAVE_LOGIN_DETAILS,
    payload: loginData,
  };
}

export const getLogin = () => {
  return {
    type: GET_LOGIN,
    payload: ''
  };
};
