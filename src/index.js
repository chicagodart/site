import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// components
import RelativeRoutes from './components/RelativeRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

render(
  <Provider store={store}>
    <Router>
      <Route path="/">
        <div>
          <Navbar />
          <div className="container">
            <RelativeRoutes />
          </div>
          <Footer />
        </div>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
