import { types } from './actions';

const defaultState = {
  isLoading: false,
  isAuthenticated: false,
  passwordChanged: false,
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.START_AUTHENTICATION:
      console.log(action);
      return {
        ...state,
        isLoading: true,
      };
    case types.AUTHENTICATION_SUCCESSFUL:
      return {
        isLoading: false,
        isAuthenticated: true,
        passwordChanged: action.payload.passwordChanged,
      };
    case types.AUTHENTICATION_FAILED:
      return defaultState;
    default:
      return state;
  }
};
