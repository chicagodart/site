import React, { Component } from 'react';

//components
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';


class Accessibility extends Component {
  
  render(){
    return(
      <div>
        
        {/*Body*/}
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

export default Accessibility;