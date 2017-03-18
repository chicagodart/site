import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Donate from './components/Donate';
import Accessibility from './components/Accessibility';
import Auditions from './components/Auditions';

// import App from './App';
// import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/donate" component={Donate} />
      <Route exact path="/auditions" component={Auditions} />
      <Route exact path="/accessibility" component={Accessibility} />
      <Footer />
    </div>
  </Router>,
  document.getElementById('root')
);
