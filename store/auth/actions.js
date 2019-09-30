import axios from 'axios';

export const types = {
  START_AUTHENTICATION: '@@AUTH/START_AUTHENTICATION',
  AUTHENTICATION_SUCCESSFUL: '@@AUTH/AUTHENTICATION_SUCCESSFUL',
  AUTHENTICATION_FAILED: '@@AUTH/AUTHENTICATION_FAILED',
  LOGOUT_SUCCESSFUL: '@@AUTH/LOGOUT_SUCCESSFUL',
  LOGOUT_FAILED: '@@AUTH/LOGOUT_FAILED',
  CHANGE_PASSWORD_SUCCESS: '@@AUTH/CHANGE_PASSWORD_SUCCESS',
  CHANGE_PASSWORD_FAILED: '@@AUTH/CHANGE_PASSWORD_FAILED',
  BLOCK_TEACHER: '@@AUTH/BLOCK_TEACHER_SUCCESS'
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
const changePasswordSuccessful = () => ({
  type: types.CHANGE_PASSWORD_SUCCESS,
});
const changePasswordFailed = () => ({
  type: types.CHANGE_PASSWORD_FAILED,
});
const blockTeacherAction = () => ({
  type: types.BLOCK_TEACHER,
});

export const authenticate = (data) => (dispatch) => {
  dispatch(startAuthentication());

  return axios.post(`${process.env.BACKEND}/api/login`, data).then((response) => {
    dispatch(authenticationSuccessful(response.data));
    return response;
  }).catch((error) => {
    dispatch(authenticationFailed());
    throw error;
  });
};

export const logout = () => (dispatch) => {
  dispatch(startAuthentication());

  return axios.post(`${process.env.BACKEND}/api/login/logout`).then((response) => {
    dispatch(logoutSuccessful());
    return response;
  }).catch((error) => {
    dispatch(logoutFailed());
    throw error;
  });
};

export const changePassword = (data) => (dispatch) => {
  dispatch(startAuthentication());

  return axios.post(`${process.env.BACKEND}/api/login/changePassword`, data).then((response) => {
    dispatch(changePasswordSuccessful());
    return response;
  }).catch((error) => {
    dispatch(changePasswordFailed());
    throw error;
  });
};

export const blockTeacher = () => (dispatch) => {
    dispatch(blockTeacherAction());
};
