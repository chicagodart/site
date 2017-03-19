import React, { PropTypes } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Donate from './components/Donate';
import Accessibility from './components/Accessibility';
import Auditions from './components/Auditions';

const renderClass = (props) => {
  if (props.highContrast && props.largeFont) {
    return 'high-contrast large-font';
  } else if (props.highContrast) {
    return 'high-contrast';
  } else if (props.largeFont) {
    return 'large-font';
  }
  return null;
};

const Router = props => (
  <BrowserRouter>
    <div className={renderClass(props)} id="toggler-div">
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
  </BrowserRouter>
);

const mapStateToProps = ({ toggle }) => {
  const { largeFont, highContrast } = toggle;
  return { largeFont, highContrast };
};

Router.propTypes = {
  largeFont: PropTypes.bool,
  highContrast: PropTypes.bool,
};

export default connect(mapStateToProps)(Router);
