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
                
        <div>
          <h1>Hero Img</h1>
        </div>
        
        <div>
          <div>
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

          <Sidebar items={this.state}/>
        </div>
        
      </div>
    )
  }
}

export default Auditions;