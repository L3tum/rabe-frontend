import { types } from './actions';

const defaultState = {
  isLoading: false,
  isAuthenticated: false,
  passwordChanged: false,
  isAdmin: false,
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.START_AUTHENTICATION:
      return {
        ...state,
        isLoading: true,
      };
    case types.AUTHENTICATION_SUCCESSFUL:
      return {
        isAuthenticated: true,
        passwordChanged: action.payload.passwordGeaendert,
        isAdmin: action.payload.administrator,
      };
    case types.AUTHENTICATION_FAILED:
    case types.LOGOUT_SUCCESSFUL:
      return defaultState;
    case types.LOGOUT_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
