import { takeEvery } from 'redux-saga/effects'
import { INCREAMENT_DATA, DECREAMENT_DATA } from '../../components/Counter/Counter.redux'

export default function *CounterSaga() {
    yield takeEvery(INCREAMENT_DATA, handleIncreamentData)
    yield takeEvery(DECREAMENT_DATA, handleDecreamentData)
}

function *handleIncreamentData() {
    console.log('handle increament data')
}

function *handleDecreamentData() {
    console.log('handle decreament data')
}