import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { loadPages } from './reducers/pages';

import DataActions from './DataActions';

class App extends Component {

  componentWillMount(){
    this.props.loadPages()
  }

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

<<<<<<< Updated upstream
export default connect(mapStateToProps)(App);
=======
const mapDispatchToProps = (dispatch) => {
  return {
    loadPages: (pages) => dispatch(loadPages(pages))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
>>>>>>> Stashed changes
