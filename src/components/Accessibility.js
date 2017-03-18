import React, { Component } from 'react';

//components
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';


class Accessibility extends Component {
  
  render(){
    <div>
      <Navbar/>
      
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
      
      <Footer/>
    </div>
  }
}

export default Accessibility;