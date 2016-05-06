import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';

const logger = createLogger();
export default function configureStore(intitial) {
  const store = createStore(rootReducer, intitial);
  return store
}
