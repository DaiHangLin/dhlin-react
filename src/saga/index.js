import { fork } from 'redux-saga/effects'
import CounterSaga from './Counter/Counter.sags'

export default function* rootSaga() {
    yield fork(CounterSaga)
}