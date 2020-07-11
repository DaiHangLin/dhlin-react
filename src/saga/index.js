import { fork } from 'redux-saga/effects'
import CounterSaga from './Counter/Counter.saga'

export default function* rootSaga() {
    yield fork(CounterSaga)
}