import React, { PropTypes } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import RelativeRoutes from './components/RelativeRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import MailingList from './components/MailingList';

const renderClass = (props) => {
  if (props.largeFont) {
    return 'large-font';
  }
  return null;
};

const Router = props => (
  <BrowserRouter>
    <div className={renderClass(props)} id="toggler-div">
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect from="/home" to="/" />
          <Route path="/mailing" component={MailingList} />
          <RelativeRoutes />
        </Switch>
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
