import { types } from './actions';

const defaultState = {
  rooms: [],
};

const roomReducers = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_ROOMS_SUCCESS: {
      return {
        ...state,
        rooms: action.payload,
      };
    }
    case types.START_ROOMS_REQUEST:
    default:
      return state;
  }
};

export default roomReducers;
