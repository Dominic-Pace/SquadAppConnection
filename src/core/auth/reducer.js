import { AUTH_REQUEST } from './types'

const INITIAL_STATE = {
  isRequesting: false
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case AUTH_REQUEST:
      return { ...state, isRequesting: true };
    default:
      return state;
  }
};