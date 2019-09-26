/* Import external packages */
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/* Import reducers */
import { authReducer, authState } from './auth';

export const reducers = combineReducers({
  auth: authReducer,
});

const defaultState = {
  auth: authState,
};

export const initializeStore = (initialState = defaultState) => (
  createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware()),
  )
);
