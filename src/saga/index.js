import { delay } from 'redux-saga/effects'

export default function* rootSaga() {
    while (true) {
        yield delay(2000)
        console.log('root saga running....')
    }
}