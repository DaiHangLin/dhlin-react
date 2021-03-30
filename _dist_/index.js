import __SNOWPACK_ENV__ from '../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import { Provider } from '../web_modules/react-redux.js';
import { Route, Switch } from '../web_modules/react-router.js';
import { ConnectedRouter } from '../web_modules/connected-react-router.js';
import configureStore, { history } from './store/configureStore.js';
import React from '../web_modules/react.js';
import ReactDOM from '../web_modules/react-dom.js';
import App from './App.js';
import CounterView from './components/Counter/Counter.view.js';
import './index.css.proxy.js';
const store = configureStore();
ReactDOM.render( /*#__PURE__*/React.createElement(Provider, {
  store: store
}, /*#__PURE__*/React.createElement(ConnectedRouter, {
  history: history
}, " ", /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
  exact: true,
  path: "/",
  component: App
}), /*#__PURE__*/React.createElement(Route, {
  exact: true,
  path: "/counter",
  component: CounterView
}), /*#__PURE__*/React.createElement(Route, {
  render: () => /*#__PURE__*/React.createElement("div", null, "404")
}))))), document.getElementById('root')); // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement

if (import.meta.hot) {
  import.meta.hot.accept();
}