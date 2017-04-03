import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import PageLayout from './PageLayout';
import templates from './index.js';

class RelativeRoutes extends Component {

  render() {
    return (
      <div>
        <Route
          exact
          path={'/:slug'}
          render={(props) => {
            const slug = props.match.params.slug;
            const page = this.props.pages[slug];
            if (!page) return (<div />);
            const Template = templates[page.acf._template] || templates._default;
            return (
              <PageLayout page={page}>
                <Template />
              </PageLayout>
            );
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
