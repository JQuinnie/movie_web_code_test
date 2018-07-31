import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import configureStore, { history } from './store';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';

import './index.css';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker();
