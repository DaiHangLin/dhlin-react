import { takeEvery, call, put } from '../../../web_modules/redux-saga/effects.js';
import { INCREAMENT_DATA, DECREAMENT_DATA, counterDataSelecter, increamentDataSuccess, increamentDataFail } from '../../components/Counter/Counter.redux.js';
export default function* CounterSaga() {
  yield takeEvery(INCREAMENT_DATA, handleIncreamentData);
  yield takeEvery(DECREAMENT_DATA, handleDecreamentData);
}

function* handleIncreamentData() {
  try {
    yield call(wait, 3000);
    yield put(increamentDataSuccess());
  } catch (error) {
    console.error(error);
    yield put(increamentDataFail());
  }
}

function* handleDecreamentData() {
  console.log('handle decreament data');
}

function* wait(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t);
  });
}