import {serverUrl} from '../constant/constants';
import interceptors from './interceptors';

export const loginApi = params => {
  return interceptors.post(`${serverUrl}login`, params);
};
