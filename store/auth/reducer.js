import { types } from './actions';

const defaultState = {
  isLoading: false,
  isAuthenticated: false,
  passwordChanged: false,
  isAdmin: false,
  isBlocked: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.START_AUTHENTICATION:
      return {
        ...state,
        isLoading: true,
      };
    case types.AUTHENTICATION_SUCCESSFUL:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        passwordChanged: !!action.payload.passwordGeaendert,
        isAdmin: !!action.payload.administrator,
        isBlocked: !!action.payload.blocked,
      };
    case types.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        passwordChanged: true,
        isLoading: false,
      };
    case types.BLOCK_TEACHER:
      return {
        ...state,
        isBlocked: true,
      };
    case types.AUTHENTICATION_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        isBlocked: !!action.payload.blocked,
      };
    case types.LOGOUT_SUCCESSFUL:
      return defaultState;
    case types.LOGOUT_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case types.CHANGE_PASSWORD_FAILED:
    default:
      return state;
  }
};

export default authReducer;
