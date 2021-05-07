import { combineReducers } from 'redux';
import userReducer from './reducers/user-list.reducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
