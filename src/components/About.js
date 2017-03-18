import React, { Component } from 'react';

//components
import Sidebar from './Sidebar'

class About extends Component {

  constructor(props){
    super(props);
    this.state = {
      mission: 'm',
      values: 'v',
      leardership: 'l',
      company: 'c',
      sponsers: 's',
    }
  }

  render(){
    return(
      <div>      
        <div>

          <div>
            <h1>Hero Img</h1>
          </div>
          
          <div className="clearfix">
            <div className="col col-2">
              <div>
                <h2>Mission</h2>
                <p>mission + vision</p>
              </div>
              <div>
                <h2>Values</h2>
                <p>values</p>
              </div>
              <div>
                <h2>Leadership</h2>
                <p>board members</p>
              </div>
              <div>
                <h2>Company</h2>
                <p>company / actors</p>
              </div>
              <div>
                <h2>Sponsers</h2>
                <p>sponsers</p>
              </div>
            </div>
            <div className="col col-2">
              <Sidebar items={this.state}/>
            </div>
          </div>

        </div>        
      </div>
    )
  }

}

export default About;