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
    return (
      <div>

        <Route
          path={'/:slug'}
          render={(props) => {
            const slug = props.match.params.slug;
            const page = this.props.pages[slug];
            const Template = !!page && templates[page.template] || templates._default;
            return <Template {...props} page={page} />;
          }}
        />
      </div>
    );
  }
}
// {Object.keys(this.props.pages).map((pageId) => {
//   const page = this.props.pages[pageId];
//   const Template = templates[page.template] || templates._default;
//   console.log('path', page.slug);
//   return (
//     <Route
//       path={`/${page.slug}`}
//       key={page.id}
//       component={Template}
//       />
//   );
// })}

const mapStateToProps = state => ({
  pages: state.pages
});

const mapDispatchToProps = {
  loadPages
};

export default connect(mapStateToProps, mapDispatchToProps)(RelativeRoutes);
