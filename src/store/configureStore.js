import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from '../reducers/createRootReducer'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
export const history = createBrowserHistory()
import rootSaga from '../saga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        logger,
        sagaMiddleware,
      ),
    ),
  )
  sagaMiddleware.run(rootSaga)
  return store
}