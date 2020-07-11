#  单元测试

- reducer 层
- selector 层
- saga 层
- component 层

```js
import * as React from 'react';
import { render } from '@testing-library/react';
import { expectSaga } from 'redux-saga-test-plan'

import { counter } from '../reducers/counter'
import { increamentData, decreamentData, counterDataSelecter,
  increamentDataSuccess } from '../components/Counter/Counter.redux'
import CounterSaga from '../saga/Counter/Counter.saga'
import CounterView from '../components/Counter/Counter.view';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore'


// test reducer
test('测试Counter "+ 1" 的reducer', () => {
  const prevState = {data: 2}
  const expectedState = {data: 3}
  const result = counter(prevState, increamentData())
  expect(result).toEqual(expectedState)
});

test('测试Counter "- 1" 的reducer', () => {
  const prevState = {data: 2}
  const expectedState = {data: 1}
  const result = counter(prevState, decreamentData())
  expect(result).toEqual(expectedState)
});

// test selector

test('测试Counter的selector', () => {
  const state = {
    counter: {
      data: 3,
    }
  }
  const expectedResult = 3
  const result = counterDataSelecter(state)
  expect(result).toEqual(expectedResult)
})


// test saga
// https://github.com/jfairbank/redux-saga-test-plan
test('测试Counter的saga逻辑', () => {
  const state = {
    counter: {
      data: 3,
    }
  }

  return expectSaga(CounterSaga)
  // 期望返回的结果
  .put(increamentDataSuccess())
  .dispatch(increamentData())
  .run();

}) 


// test component
test('测试组件的逻辑', () => {
  const { getByText } = render(<Provider store={configureStore()}>
    <CounterView/>
  </Provider>)
  const linkElement = getByText("+");
  expect(linkElement).toBeInTheDocument();
})


```
