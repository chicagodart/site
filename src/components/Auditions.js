import React, { Component } from 'react';

//components
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

class Auditions extends Component {
  
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

export default Auditions;