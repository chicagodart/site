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

          <div className="hero-img">
            <img src="http://www.arshtcenter.org/Global/PressRoom/photos/hi/Spring%20Awakening%20photo%20by%20Paul%20Kolnick.jpg" alt="A scene from Spring Awakening" height="100%" width="100%" />
          </div>
          
          <div className="max-width-12 mx-auto">
            <div className="clearfix mx3">
              <div className="col col-8">
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
              <div className="col col-4 center">
                <Sidebar items={this.state}/>
              </div>
            </div>
          </div>

        </div>        
      </div>
    )
  }

}

export default About;