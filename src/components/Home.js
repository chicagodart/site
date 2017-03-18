import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="hero-img">
          <img src="http://www.arshtcenter.org/Global/PressRoom/photos/hi/Spring%20Awakening%20photo%20by%20Paul%20Kolnick.jpg" alt="A scene from Spring Awakening" height="100%" width="100%" />
        </div>
        <div className="content">
          <div className="content-left">
            <p>Chicago D(ART), or Deaf ART, is the creative home for artists looking to bridge the communication barrier between the d/Deaf and hearing worlds.</p>
          </div>
          <div className="right-sidebar">
            <div>
              <h3>Call to Action</h3>
            </div>
            <div>
              <h3>Calendar (Agenda)</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
