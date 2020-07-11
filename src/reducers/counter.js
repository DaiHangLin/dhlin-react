import { DECREAMENT_DATA, INCREAMENT_DATA } from '../components/Counter/Counter.redux'
import { createReducer } from './reducerUtils'
import _ from 'lodash'

export const counter = createReducer({}, {
    [DECREAMENT_DATA]: (state, action) => {
        return {
            data: _.get(state, 'data', 0) - 1
        }
    },
    [INCREAMENT_DATA]: (state, action) => {
        return {
            data: _.get(state, 'data', 0) + 1
        }
    },
})