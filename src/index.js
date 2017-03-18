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
    <div className="container">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/events" component={Events} />
      <Route path="/donate" component={Donate} />
      <Route path="/auditions" component={Auditions} />
      <Route path="/accessibility" component={Accessibility} />
      <Footer />
    </div>
  </Router>,
  document.getElementById('root')
);
