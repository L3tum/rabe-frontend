import axios from 'axios';

export const types = {
  START_AUTHENTICATION: '@@AUTH/START_AUTHENTICATION',
  AUTHENTICATION_SUCCESSFUL: '@@AUTH/AUTHENTICATION_SUCCESSFUL',
  AUTHENTICATION_FAILED: '@@AUTH/AUTHENTICATION_FAILED',
  LOGOUT_SUCCESSFUL: '@@AUTH/LOGOUT_SUCCESSFUL',
  LOGOUT_FAILED: '@@AUTH/LOGOUT_FAILED',
};

const startAuthentication = () => ({
  type: types.START_AUTHENTICATION,
});

const authenticationSuccessful = (data) => ({
  type: types.AUTHENTICATION_SUCCESSFUL,
  payload: data,
});
const authenticationFailed = () => ({
  type: types.AUTHENTICATION_FAILED,
});
const logoutSuccessful = () => ({
  type: types.LOGOUT_SUCCESSFUL,
});
const logoutFailed = () => ({
  type: types.LOGOUT_FAILED,
});

export const authenticate = (data) => (dispatch) => {
  dispatch(startAuthentication());

  return axios.post('https://rabe-backend.herokuapp.com/api/login', data).then((response) => {
    console.log(response);
    dispatch(authenticationSuccessful(response.data));
    return response;
  }).catch((error) => {
    console.log(error);
    dispatch(authenticationFailed());
    throw error;
  });
};

export const logout = () => (dispatch) => {
  dispatch(startAuthentication());

  return axios.post('https://rabe-backend.herokuapp.com/api/login/logout').then((response) => {
    dispatch(logoutSuccessful());
    return response;
  }).catch((error) => {
    dispatch(logoutFailed());
    throw error;
  });
};
