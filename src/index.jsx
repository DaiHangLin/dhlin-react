import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store/configureStore'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CounterView from './components/Counter/Counter.view'
import './index.css';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
      <> { /* your usual react-router v4/v5 routing */ }
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/counter" component={CounterView} />
          <Route render={() => (<div>404</div>)} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
