import { types } from './actions';
import { removeCookie, setCookie } from '../../components/cookie';

const defaultState = {
  isLoading: false,
  isAuthenticated: false,
  passwordChanged: false,
  isAdmin: false,
  isBlocked: false,
  token: null,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.REAUTHENTICATION_SUCCESSFUL: {
      setCookie('auth', `${JSON.stringify(action.payload)}`);

      return {
        ...state,
        ...action.payload,
      };
    }
    case types.START_AUTHENTICATION:
      return {
        ...state,
        isLoading: true,
      };
    case types.AUTHENTICATION_SUCCESSFUL:
      setCookie('auth', `${JSON.stringify(action.payload)}`);

      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        passwordChanged: !!action.payload.passwordGeaendert,
        isAdmin: !!action.payload.administrator,
        isBlocked: !!action.payload.blocked,
        token: action.payload.token,
      };
    case types.CHANGE_PASSWORD_SUCCESS:
      setCookie('auth', `${JSON.stringify(state.auth)}`);

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
    case types.REAUTHENTICATION_FAILED:
    case types.AUTHENTICATION_FAILED:
      removeCookie('auth');

      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        isBlocked: action.payload ? !!action.payload.blocked : false,
        token: null,
      };
    case types.LOGOUT_SUCCESSFUL:
      removeCookie('auth');

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
