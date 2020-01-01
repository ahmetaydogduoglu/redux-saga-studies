import { takeEvery, put, delay, call } from 'redux-saga/effects';
import { AGE_DOWN, AGE_UP_ASYNC, DEL_ITEM_ASYNC } from '../store/actions/actionType';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { itemDel } from '../store/actions/action';
const assert = require("assert");

export function* AgeUpAsync() {
    yield delay(2000);
    yield put({ type: 'AGE_UP_ASYNC' })
}

export function* DeleteAge(action) {
    yield delay(5000)
    yield put({ type: 'DEL_ITEM_ASYNC', payload: action.payload })
}

export function* rootSaga() {
    yield takeEvery('AGE_UP', AgeUpAsync)
    yield takeEvery('DEL_ITEM', DeleteAge)

}




