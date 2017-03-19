import React, { Component } from 'react';

//components
import Sidebar from './Sidebar';

class Donate extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      why: 'why donate',
      where: 'where it goes',
    }
  }

  render(){
    return(
      <div>
        <div className="hero-img">
          <img src="http://www.arshtcenter.org/Global/PressRoom/photos/hi/Spring%20Awakening%20photo%20by%20Paul%20Kolnick.jpg" alt="A scene from Spring Awakening" height="100%" width="100%" />
        </div>
        
        <div className="clearfix mx3">
          <div className="col col-8">
            <div>
              <h2>Why</h2>
              <p>why donate</p>
            </div>
            <div>
              <h2>Where</h2>
              <p>where the $ goes</p>
            </div>
          </div>

          <div className="col col-4 center">
            <div >
              <div className="clearfix my4">Add Donations link</div>
              <Sidebar items={this.state}/>
            </div>
          </div>
          
        </div>
          
      </div>
    )
  }
}

export default Donate;