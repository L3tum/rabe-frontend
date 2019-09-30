import axios from 'axios';

export const types = {
  START_ROOMS_REQUEST: '@@ROOMS/START_ROOMS_CALL',
  GET_ROOMS_SUCCESS: '@@ROOMS/GET_ROOMS_SUCCESS',
  GET_ROOMS_FAIL: '@@ROOMS/GET_ROOMS_FAILED',
};

const startRoomsRequest = () => ({
  type: types.START_ROOMS_REQUEST,
});

const getRoomsSuccess = (data) => ({
  type: types.GET_ROOMS_SUCCESS,
  payload: data,
});

const getRoomsFail = () => ({
  type: types.GET_ROOMS_FAIL,
});

export const getRooms = () => (dispatch) => {
  dispatch(startRoomsRequest());

  axios.get('/api/rooms').then((response) => {
    dispatch(getRoomsSuccess(response.data.data));
    return response;
  }).catch((error) => {
    dispatch(getRoomsFail());
    return error;
  });
};
