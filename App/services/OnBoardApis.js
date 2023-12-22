import {serverUrl} from '../constant/constants';
import interceptors from './interceptors';

export const fetchOfferData = () => {
  return interceptors.get(`${serverUrl}offers`);
};
