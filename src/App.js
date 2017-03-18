import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    const page = this.props.pages[0];

    return (
      <div className="App">
        <h1>{ page.title.rendered }</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
  }
}

export default connect(mapStateToProps)(App);