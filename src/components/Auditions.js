import React, { Component } from 'react';

//components
import Sidebar from './Sidebar';

class Auditions extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 't',
      showInfo: 's',
      roles: 'ro',
      rehersal: 're',
      auditionDetails: 'a'
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
            <h2>Upcoming Auditions</h2>

            <div>
              <p>title</p>
            </div>

            <div>
              <p>showInfo</p>
            </div>

            <div>
              <p>roles</p>
            </div>

            <div>
              <p>rehersal</p>
            </div>

            <div>
              <p>auditionDetails</p>
            </div>
          </div>

          <div className="col col-4">
            <Sidebar items={this.state}/>
          </div>
          
        </div>
        
      </div>
    )
  }
}

export default Auditions;