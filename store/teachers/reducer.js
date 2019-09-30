import { types } from './actions';

const defaultState = {
  isLoading: false,
  data: [],
};

const teacherReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.START_TEACHER_CALL:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_TEACHERS_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default teacherReducer;
