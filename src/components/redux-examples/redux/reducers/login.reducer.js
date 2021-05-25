import { SAVE_LOGIN_DETAILS, GET_LOGIN } from './../actions/action-types';

const initialState = {

  // initialized state with some static data
  loginData: {
    name: 'Mohit',
    company: 'abcd',
    userName: 'm@gmail.com',
    password: '12345',
  },
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_LOGIN_DETAILS:
      return {
        ...state,
        loginData: action.payload,
      };
    case GET_LOGIN:
      return state;
    default:
      return state;
  }
};

export default loginReducer;
