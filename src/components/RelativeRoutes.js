import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { loadPages } from '../reducers/pages';

import templates from './index.js';

class RelativeRoutes extends Component {

  componentDidMount() {
    this.props.loadPages();
  }

  render() {
    console.log(this.props.pages);
    return (
      <div>
        {Object.keys(this.props.pages).map((pageId) => {
          const page = this.props.pages[pageId];
          console.log('path', page.slug);
          console.log('hey im gonna load this', templates[page.template]);
          return (
            <Route
              path={`/${page.slug}`}
              key={page.id}
              component={
                templates[page.template]
                || templates._default}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pages: state.pages
});

const mapDispatchToProps = {
  loadPages
};

export default connect(mapStateToProps, mapDispatchToProps)(RelativeRoutes);
