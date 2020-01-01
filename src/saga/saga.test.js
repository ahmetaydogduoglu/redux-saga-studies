import { AgeUpAsync, DeleteAge } from './saga';
import ReactDOM from 'react-dom';
import React from 'react';
const assert = require("chai").assert
import { } from "redux-saga-test-plan"
import { select, put, delay } from 'redux-saga/effects';

test('AgeUpAsync', () => {
    const gen = AgeUpAsync();
    expect(gen.next().value).toEqual(delay(2000));
    expect(gen.next().value).toEqual(put({ type: 'AGE_UP_ASYNC' }));
    expect(gen.next().done).toEqual(true);
})
test('del age', async action => {
    const gen = DeleteAge(action);
    await expect(gen.next().value).toEqual(delay(5000));
    await expect(gen.next().value).toEqual(put({ type: 'DEL_ITEM_ASYNC', payload: action.payload }))
    await expect(gen.next().done).toEqual(true);
}, 6000)


