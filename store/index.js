/* Import external packages */
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

/* Import reducers */
import authReducer from './auth/reducer';
import teacherReducer from './teachers/reducer';

export const reducers = combineReducers({
  auth: authReducer,
  teachers: teacherReducer,
});


export const initializeStore = () => (
  createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunk)),
  )
);
