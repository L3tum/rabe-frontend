import axios from 'axios';

export const types = {
  START_TEACHER_CALL: '@@TEACHERS/START_TEACHER_CALL',
  GET_TEACHERS_SUCCESS: '@@TEACHERS/GET_TEACHERS_SUCCESS',
  GET_TEACHERS_FAIL: '@@TEACHERS/GET_TEACHERS_FAIL',
};

const startTeacherCall = () => ({
  type: types.START_TEACHER_CALL,
});
const getTeachersSuccess = (payload) => ({
  payload,
  type: types.GET_TEACHERS_SUCCESS,
});
const getTeachersFail = () => ({
  type: types.GET_TEACHERS_FAIL,
});

export const getTeachers = () => (dispatch) => {
  dispatch(startTeacherCall());

  return axios.get(`${process.env.BACKEND}/api/teacher`).then((response) => {
    dispatch(getTeachersSuccess(response.data));
    return response;
  }).catch((error) => {
    dispatch(getTeachersFail());
    throw error;
  });
};
