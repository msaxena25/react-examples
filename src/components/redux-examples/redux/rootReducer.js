import { combineReducers } from 'redux';
import loginReducer from './reducers/login.reducer';
import userReducer from './reducers/user-list.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer
});

export default rootReducer;
