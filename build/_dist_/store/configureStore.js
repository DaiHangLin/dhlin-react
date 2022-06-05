import { createBrowserHistory } from '../../web_modules/history.js';
import { applyMiddleware, compose, createStore } from '../../web_modules/redux.js';
import { routerMiddleware } from '../../web_modules/connected-react-router.js';
import createRootReducer from '../reducers/createRootReducer.js';
import logger from '../../web_modules/redux-logger.js';
import createSagaMiddleware from '../../web_modules/redux-saga.js';
export const history = createBrowserHistory();
import rootSaga from '../saga/index.js';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
export default function configureStore(preloadedState) {
  const store = createStore(createRootReducer(history), preloadedState, composeEnhancers(applyMiddleware(routerMiddleware(history), logger, sagaMiddleware)));
  sagaMiddleware.run(rootSaga);
  return store;
}