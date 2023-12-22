import {LOGOUT, SAVE_USER} from '../../constant/actionTypes';

export function saveUser(user) {
  console.log('reduser user :>> ', user);
  return {
    type: SAVE_USER,
    payload: user,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
