import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect, Provider} from 'react-redux'
import App from './App';
import './index.css';
import axios from 'axios';
import store from './store';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Donate from './components/Donate';
import Accessibility from './components/Accessibility';
import Auditions from './components/Auditions';


// render (
//   <Provider store={store}>
//     <Router>
//       <Route path='/' component={App} />
        
//     </Router>
// </Provider>,

render(
  <Router>
    <div>
      <Navbar />
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
        <Route path="/donate" component={Donate} />
        <Route path="/auditions" component={Auditions} />
        <Route path="/accessibility" component={Accessibility} />
      </div>
      <Footer />
    </div>
  </Router>,
  document.getElementById('root')
);