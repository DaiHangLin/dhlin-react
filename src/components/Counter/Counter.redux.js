import { createAction } from '../../reducers/reducerUtils'
import { createSelector } from 'reselect'
import _ from 'lodash'

export const INCREAMENT_DATA = 'INCREAMENT_DATA'
export const INCREAMENT_DATA_SUCCESS = 'INCREAMENT_DATA_SUCCESS'
export const INCREAMENT_DATA_FAIL = 'INCREAMENT_DATA_FAIL'
export const DECREAMENT_DATA = 'DECREAMENT_DATA'

export const increamentData = () => createAction(INCREAMENT_DATA)
export const increamentDataSuccess = () => createAction(INCREAMENT_DATA_SUCCESS)
export const increamentDataFail = () => createAction(INCREAMENT_DATA_FAIL)
export const decreamentData = () => createAction(DECREAMENT_DATA)

export const counterDataSelecter = createSelector(
    state => state.counter,
    (counter) => _.get(counter, 'data', 0)
)
