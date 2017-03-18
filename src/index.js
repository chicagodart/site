import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect, Provider} from 'react-redux'
import App from './App';
import './index.css';
import axios from 'axios';
import store from './store';


render (
  <Provider store={store}>
    <Router>
      <Route path='/' component={App} />
    </Router>
</Provider>,
  document.getElementById('root')
);