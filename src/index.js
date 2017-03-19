import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import App from './App';
// import './index.css';
import axios from 'axios';
import store from './store';

// components
import RelativeRoutes from './components/RelativeRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


render(
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <RelativeRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
