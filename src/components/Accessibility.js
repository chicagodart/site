import React, { Component } from 'react';

//components
import Sidebar from './Sidebar';


class Accessibility extends Component {
  constructor(props){
    super(props);
    this.state = {
      protocols: 'p',
      interpreters: 'i',
      captioning: 'cc',
      resources: 'r',
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
              <h2>Protocols</h2>
              <p>protocols</p>
            </div>
            <div>
              <h2>DB of Interpreters</h2>
              <p>DB</p>
            </div>
            <div>
              <h2>Caption Company</h2>
              <p>caption company</p>
            </div>
            <div>
              <h2>Resource Guide</h2>
              <p>resource guide</p>
            </div>
          </div>
          <div className="col col-4 center">
            <Sidebar listItems={this.props.page.acf}/>
          </div>
          
        </div>
        
      </div>
    )
  }
}

export default Accessibility;