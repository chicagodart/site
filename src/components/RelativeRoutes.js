import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import templates from './index.js';

class RelativeRoutes extends Component {

  componentDidMount() {
    // this.props.loadPages();
  }

  render() {
    return (
      <div>

        <Route
          exact
          path={'/:slug'}
          render={(props) => {
            const slug = props.match.params.slug;
            const page = this.props.pages[slug];
            console.log('TEMPLATE: ', !page ? 'no page yet' : page.acf._template);
            const Template = !!page && templates[page.acf._template] || templates._default;
            return <Template {...props} page={page} />;
          }}
        />

        <Route
          exact
          path={'/events/:slug'}
          render={(props) => {
            const slug = props.match.params.slug;
            const post = this.props.posts[slug];
            const Template = templates.SingleEvent;
            return <Template {...props} post={post} />;
          }}
        />
      </div>
    );
  }
}


const mapStateToProps = ({ pages, posts }) => ({ pages, posts });

export default connect(mapStateToProps)(RelativeRoutes);
