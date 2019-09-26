import { types } from './actions';

export const authState = {
  isLoading: false,
  isAuthenticated: false,
  passwordChanged: false
};

export const authReducer = (state = authState, action) => {
  switch (action.types) {
    case types.AUTHENTICATION_FAILED:
      return authState;
    case types.AUTHENTICATION_SUCCESSFUL:
      return {
        isLoading: false,
        isAuthenticated: true,
        passwordChanged: action.payload.passwordChanged
      };
    case types.START_AUTHENTICATION:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
