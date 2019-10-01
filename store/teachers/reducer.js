import { types } from './actions';

const defaultState = {
  isLoading: false,
  data: [],
};

const teacherReducer = (state = defaultState, action) => {
  const { data, isLoading } = state;

  switch (action.type) {
    case types.START_TEACHER_CALL:
      return {
        ...state,
        isLoading: !isLoading,
      };
    case types.GET_TEACHERS_SUCCESS:
      return {
        data: action.payload,
        isLoading: !isLoading,
      };
    case types.CREATE_TEACHER_SUCCESS:
      data.push(action.payload);

      return {
        data,
        isLoading: !isLoading,
      };
    default:
      return state;
  }
};

export default teacherReducer;
