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
            <h2>Upcoming Auditions</h2>
            <div>
              {this.props.pages && 
                Object.keys(this.props.pages[2].acf).map((header, i) => {
                  if(header[0] !== "_") {
                    return (
                      <div>
                        <h2 key={i}>{this.convertHeaders(header)}</h2>
                        <div key={header} dangerouslySetInnerHTML={{ __html: this.props.pages[4].acf[header] }} />
                      </div>
                    )}
                  }
                )}
            </div>
          </div>

          <div className="col col-4 center">
            <Sidebar items={this.state}/>
          </div>
          
        </div>
        
      </div>
    )
  }
}

export default Auditions;