import React, { PropTypes } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadPages } from './reducers/pages';

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

class Router extends React.Component {

  componentDidMount() {
    this.props.loadPages();
  }

  render() {
    return (
      <BrowserRouter>
        <div className={renderClass(this.props)} id="toggler-div">
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact path="/" render={(p) => {
                  const slug = p.match.params.slug;
                  const page = this.props.pages.home;
                  return <Home {...p} page={page} />;
                }}
              />
              <Redirect from="/home" to="/" />
              <Route path="/mailing" component={MailingList} />
              <RelativeRoutes />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ toggle, pages, posts }) => {
  const { largeFont, highContrast } = toggle;
  return { largeFont, highContrast, pages, posts };
};
const mapDispatchToProps = { loadPages };

Router.propTypes = {
  largeFont: PropTypes.bool,
  highContrast: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
