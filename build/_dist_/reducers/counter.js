import { DECREAMENT_DATA, INCREAMENT_DATA } from '../components/Counter/Counter.redux.js';
import { createReducer } from './reducerUtils.js';
import _ from '../../web_modules/lodash.js';
export const counter = createReducer({}, {
  [DECREAMENT_DATA]: (state, action) => {
    return {
      data: _.get(state, 'data', 0) - 1
    };
  },
  [INCREAMENT_DATA]: (state, action) => {
    return {
      data: _.get(state, 'data', 0) + 1
    };
  }
});