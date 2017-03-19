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
  convertHeaders(header) {
    return header.split("_")
    .map(word => word[0].toUpperCase() + word.slice(1)) 
    .join(" ")
  }

  render(){
    return(
      <div>
        <div className="hero-img">
          <img src="http://www.arshtcenter.org/Global/PressRoom/photos/hi/Spring%20Awakening%20photo%20by%20Paul%20Kolnick.jpg" alt="A scene from Spring Awakening" height="100%" width="100%" />
        </div>
        
        <div className="clearfix mx3">
          <div className="col col-8">
            <div>
              {this.props.pages && 
                Object.keys(this.props.pages["donate"].acf).map((header, i) => {
                  if(header[0] !== "_") {
                    return (
                      <div>
                        <h2 key={i}>{this.convertHeaders(header)}</h2>
                        <div key={header} dangerouslySetInnerHTML={{ __html: this.props.pages["donate"].acf[header] }} />
                      </div>
                    )}
                  }
                )}
            </div>
          </div>

          <div className="col col-4 center">
            <div >
              <div className="clearfix my4">Add Donations link</div>
              <Sidebar items={this.state}/>
            </div>
          </div>
          
        </div>
          
      </div>
    )
  }
}

export default Donate;