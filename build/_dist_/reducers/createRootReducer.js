import { combineReducers } from '../../web_modules/redux.js';
import { connectRouter } from '../../web_modules/connected-react-router.js';
import { counter } from './counter.js';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  counter
});

export default createRootReducer;