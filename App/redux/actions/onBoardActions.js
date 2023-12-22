import {OFFERS_LIST} from '../../constant/actionTypes';

export function offersList(offers) {
  return {
    type: OFFERS_LIST,
    payload: offers,
  };
}
