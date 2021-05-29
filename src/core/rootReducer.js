import { combineReducers } from 'redux';
import loginReducer from '../components/redux-examples/redux/reducers/login.reducer';
import userReducer from '../components/redux-examples/redux/reducers/user-list.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer
});

export default rootReducer;
