import axios from 'axios';

export const types = {
  START_TEACHER_CALL: '@@TEACHERS/START_TEACHER_CALL',
  GET_TEACHERS_SUCCESS: '@@TEACHERS/GET_TEACHERS_SUCCESS',
  GET_TEACHERS_FAIL: '@@TEACHERS/GET_TEACHERS_FAIL',
  CREATE_TEACHER_SUCCESS: '@@TEACHER/CREATE_TEACHER_SUCCESS',
  CREATE_TEACHER_FAIL: '@@TEACHER(/CREATE_TEACHER_FAIL',
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
const createTeacherSuccess = (payload) => ({
  payload,
  type: types.CREATE_TEACHER_SUCCESS,
});
const createTeacherFail = () => ({
  type: types.CREATE_TEACHER_FAIL,
});

/**
 * Get All Teachers
 * @returns {function(*, *): Promise<AxiosResponse<T>>}
 */
export const getTeachers = () => (dispatch, getState) => {
  dispatch(startTeacherCall());

  return axios.get(`${process.env.BACKEND}/api/teacher`, { headers: { Authorization: `Bearer ${getState().auth.token}` } }).then((response) => {
    dispatch(getTeachersSuccess(response.data));
    return response;
  }).catch((error) => {
    dispatch(getTeachersFail());
    throw error;
  });
};

/**
 * Get a teacher out of the store or catch him via the api
 * @param data
 * @returns {Function}
 */
export const createTeacher = (data) => (dispatch, getState) => {
  dispatch(startTeacherCall());

  return axios.post(`${process.env.BACKEND}/api/teacher`, data, { headers: { Authorization: `Bearer ${getState().auth.token}` } })
    .then((response) => {
      dispatch(createTeacherSuccess(response.data));
      return response;
    }).catch((error) => {
      dispatch(createTeacherFail());
      throw error;
    });
};
