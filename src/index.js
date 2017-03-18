import React from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import {connect, Provider} from 'react-redux'
import App from './App';
import './index.css';
import axios from 'axios';
import store from './store';
import { loadPages } from './reducers/pages';
import DataActions from './DataActions';
import createBrowserHistory from 'history/createBrowserHistory';

const onAppEnter = (nextRouterState) => {

  DataActions.api(DataActions.pagesEndPoint)
    .then(pages => {
      store.dispatch(loadPages(pages))
    })
    .catch(err => {
      console.log(err);
    })
};

const history = createBrowserHistory();


render (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App} onEnter={onAppEnter} />
    </Router>
</Provider>,
  document.getElementById('root')
);