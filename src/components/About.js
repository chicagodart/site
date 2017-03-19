import React, { Component } from 'react';

// components
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { loadPages } from '../reducers/pages';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mission: 'm',
      values: 'v',
      leardership: 'l',
      company: 'c',
      sponsers: 's',
    };
  }

  convertHeaders(header) {
    return header.split("_")
    .map(word => word[0].toUpperCase() + word.slice(1)) 
    .join(" ")
  }

  render() {
    return (
      <div>
        <div>

          <div className="hero-img">
            <img src="http://www.arshtcenter.org/Global/PressRoom/photos/hi/Spring%20Awakening%20photo%20by%20Paul%20Kolnick.jpg" alt="A scene from Spring Awakening" height="100%" width="100%" />
          </div>

          <div className="max-width-12 mx-auto">
            <div className="clearfix mx3">
              <div className="col col-8">
                <div>
                  {this.props.pages && 
                  Object.keys(this.props.pages[4].acf).map((header, i) => {
                    if(header[0] !== "_") {
                      return (
                        <div key={header}>
                          <h2>{this.convertHeaders(header)}</h2>
                          <div dangerouslySetInnerHTML={{ __html: this.props.pages[4].acf[header] }} />
                        </div>
                      )}
                    }
                  )}
                </div>

              </div>
              <div className="col col-4 center">
                <Sidebar items={this.state} />
              </div>
            </div>
          </div>

        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);

