import axios from 'axios';

import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from './action-types';

export const GetUsers = () => (dispatch) => {
    dispatch(getUsersRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const users = response.data;
        dispatch(getUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(getUsersFailure(error.message));
      });
};

export const getUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST,
  };
};

export const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
};

export const getUsersFailure = (error) => {
  return {
    type: GET_USERS_FAILURE,
    payload: error,
  };
};
