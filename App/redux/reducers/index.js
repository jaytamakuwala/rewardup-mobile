import {combineReducers} from 'redux';
import userReducer from './userReducer';
import {LOGOUT} from '../../constant/actionTypes';

const mainReducer = combineReducers({
  user: userReducer,
});

export default rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }

  return mainReducer(state, action);
};
