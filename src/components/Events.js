import React, { Component } from 'react';

//components
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import SingleEvent from './SingleEvent';

class Events extends Component {

  render(){
    return(
      <div>
        <Navbar/>
      
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
        
        <Footer/>
      </div>
    )
  }
}

export default Events;