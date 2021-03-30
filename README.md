#  单元测试

- reducer 层

```js
// reducer是一个纯函数，测试相对简单，输入 => 输出

import { counter } from '../reducers/counter'
/*
counter 是一个纯函数，接收一个state 和 action作为输入，
输出为一个新的state
*/

test('测试Counter "+ 1" 的reducer', () => {
  const prevState = {data: 2}
  const expectedState = {data: 3}
  const result = counter(prevState, increamentData())
  expect(result).toEqual(expectedState)
});
```

- s
- elector 层

```js
// selector 和 reducer 一致，也是一个纯函数

import { increamentData, decreamentData, counterDataSelecter,
  increamentDataSuccess } from '../components/Counter/Counter.redux'

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
```


- saga 层 

```js
// 这里我们 handleIncreamentData 的saga函数 等待一个 INCREAMENT_DATA 动作
// 完成后，根据结果返回另一个 动作， 我们可以根据这个动作判断是否出错，或者代码正常运行结束，也代表saga完成

export default function *CounterSaga() {
    yield takeEvery(INCREAMENT_DATA, handleIncreamentData)
}

function *handleIncreamentData() {
    try {
        yield call(wait, 3000)
        yield put(increamentDataSuccess())    
    } catch (error) {
        console.error(error)
        yield put(increamentDataFail())
    }
    
}

test('测试Counter的saga逻辑', () => {
  return expectSaga(CounterSaga)
  // 期望返回的结果
  .put(increamentDataSuccess())
  // 启动saga需要dispatch一个相应的action
  .dispatch(increamentData())
  .run();

}) 

```

- component 层

```js
// render 加载一个组件
// getByText => 根据内容获取一个组件，判断是否存在
// fireEvent => 模拟点击事件
// todo： 点击事件可能是异步的，这里还需要再看下
test('测试组件的逻辑', () => {
  const { getByText } = render(<Provider store={configureStore()}>
    <CounterView/>
  </Provider>)
  const linkElement = getByText("+");
  expect(linkElement).toBeInTheDocument();
})


```

```js
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
  return expectSaga(CounterSaga)
  // 期望返回的结果
  .put(increamentDataSuccess())
  .dispatch(increamentData())
  .run();

}) 


// test component
// https://testing-library.com/docs/react-testing-library/example-intro
test('测试组件的逻辑', () => {
  const { getByText } = render(<Provider store={configureStore()}>
    <CounterView/>
  </Provider>)
  const linkElement = getByText("+");
  expect(linkElement).toBeInTheDocument();
})

test('测试点击事件', async () => {
  const { getByText } = render(<Provider store={configureStore()}>
    <CounterView/>
  </Provider>)
  const ele = getByText("+")
  fireEvent.click(ele)
  const result = getByText("1")
  expect(result).toBeInTheDocument();
})




```
