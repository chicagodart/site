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
        <div>
          <h1>Hero Img</h1>
        </div>
        
        <div>
          <div>
            <div>
              <h2>Why</h2>
              <p>why donate</p>
            </div>
            <div>
              <h2>Where</h2>
              <p>where the $ goes</p>
            </div>
          </div>

          <Sidebar items={this.state}/>
        </div>
          
      </div>
    )
  }
}

export default Donate;