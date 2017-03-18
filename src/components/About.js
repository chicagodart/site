import React, { Component } from 'react';

//components
import Sidebar from './Sidebar'

class About extends Component {

  render(){
    return(
      <div>      
        <div>
          <div>
            <h1>Hero Img</h1>
          </div>
          
          <div>
            <h1>Content</h1>
          </div>

          <Sidebar/>
          
        </div>        
      </div>
    )
  }

}

export default About;