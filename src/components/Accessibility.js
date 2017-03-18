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
      
        <div>
          <h1>Hero Img</h1>
        </div>

        <div>
          <div>
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

          <Sidebar items={this.state}/>
        </div>
        
      </div>
    )
  }
}

export default Accessibility;