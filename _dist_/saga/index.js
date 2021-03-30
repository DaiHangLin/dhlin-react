import { fork } from '../../web_modules/redux-saga/effects.js';
import CounterSaga from './Counter/Counter.saga.js';
export default function* rootSaga() {
  yield fork(CounterSaga);
}