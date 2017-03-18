import React, { Component } from 'react';

//components
import Sidebar from './Sidebar';
import SingleEvent from './SingleEvent';

class Events extends Component {

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

          <SingleEvent/>

          <Sidebar/>
          
        </div>
        
      </div>
    )
  }
}

export default Events;