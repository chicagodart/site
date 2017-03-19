import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="hero-img">
          <img src="http://www.arshtcenter.org/Global/PressRoom/photos/hi/Spring%20Awakening%20photo%20by%20Paul%20Kolnick.jpg" alt="A scene from Spring Awakening" height="100%" width="100%" />
        </div>
        <div className="max-width-12 mx-auto">
          <div className="clearfix mx3">
            <div className="col col-8">
              <div id="lil-about">
                <p>Chicago D(ART), or Deaf ART, is the creative home for artists looking to bridge the communication barrier between the d/Deaf and hearing worlds.</p>
              </div>
              <h2>News</h2>
            </div>
            <div className="col col-4 center">
              <h2>Call to Action</h2>
              <div id="mini-cal">
                <h2>Calendar</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
