import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../public/images/logo.svg';
// import './App.css';
import { loadPages } from './reducers/pages';
import { loadPosts } from './reducers/posts';


class App extends Component {

  componentWillMount() {
    this.props.loadPages();
    this.props.loadPosts();
  }

  render() {
    const page = this.props.pages[0];
    console.log('PAGE PROPS', this.props.pages);

    return (
      <div className="App">
        <h1>{ !!page && page.title.rendered }</h1>
        {!!page && page.content.rendered}
        {!!page && page.acf.foobar_lookatme}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pages: state.pages,
});


const mapDispatchToProps = dispatch => ({
  loadPages: pages => dispatch(loadPages(pages)),
  loadPosts: posts => dispatch(loadPosts(posts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
