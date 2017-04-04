import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Layout from './Layout';
import SingleEvent from './SingleEvent';
import templates from './index.js';

import { loadPosts } from '../reducers/posts';


class PageLayout extends Component {
  render() {
    console.log('This is a page route', this.props);
    const slug = this.props.match.params.slug;
    const page = this.props.pages[slug];
    if (!page) return (<div />);
    const Template = templates[page.acf._template] || templates._default;
    return (
      <Layout page={page}>
        <Template />
      </Layout>
    );
  }
}

const mapPageStateToProps = ({ pages }) => ({ pages });
const PageLayoutContainer = connect(mapPageStateToProps)(PageLayout);

class PostLayout extends Component {
  constructor(props) {
    super(props);
    this.props.loadPosts();
  }

  render() {
    const slug = this.props.match.params.slug;
    const post = this.props.posts[slug];
    if (!post) return (<div />);
    const Template = templates.SingleEvent;
    return (
      <Layout page={post}>
        <Template />
      </Layout>
    );
  }
}

const mapPostStateToProps = ({ posts }) => ({ posts });
const mapPostDispatchToProps = { loadPosts };
const PostLayoutContainer = connect(mapPostStateToProps, mapPostDispatchToProps)(PostLayout);

export default function RelativeRoutes() {
  return (
    <div>
      <Route
        exact
        path={'/:slug'}
        component={PageLayoutContainer}
      />

      <Route
        exact
        path={'/:year/:month/:day/:slug/'}
        component={PostLayoutContainer}
      />
    </div>
  );
}
