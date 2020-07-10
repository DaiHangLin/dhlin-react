import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
      <> { /* your usual react-router v4/v5 routing */ }
        <Switch>
          <Route exact path="/" render={() => (<div>Match</div>)} />
          <Route render={() => (<div>Miss</div>)} />
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
