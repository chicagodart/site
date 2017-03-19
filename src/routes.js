import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import templates from './components';

class Routes extends Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.pages).map((pageId) => {
          const page = this.props.pages[pageId];
          return (<Route
            path={page.slug}
            key={page.id}
            component={
              templates[page.template]
              || templates._default}
          />);
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pages: state.pages
});

export default connect(mapStateToProps)(Routes);
