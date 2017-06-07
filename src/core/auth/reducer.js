import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from './types'

const INITIAL_STATE = {
  errorMessage: '',
  isRequesting: false,
  isAuthenticated: false
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case AUTH_REQUEST:
      return { ...state, isRequesting: true, isAuthenticated: false };
    case AUTH_SUCCESS:
      return { ...state, authToken: action.authToken, currentUser: action.currentUser, isRequesting: false, isAuthenticated: true };
    case AUTH_FAILURE:
      return { ...state, errorMessage: action.errorMessage, isRequesting: false, isAuthenticated: false };
    default:
      return state;
  }
};