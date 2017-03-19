import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props){
    super(props)
    this.state = {

    }

    this.renderSidebarItems = this.renderSidebarItems.bind(this);
  }

  renderSidebarItems(items){
    return(
      <div>
        {
          items && Object.values(items).map( (item, i) => {
            return(
              <div key={i}>
                <h3>{item}</h3>
              </div>
            )
          })
        }
      </div>
    )
  }

  render(){

    let sidebarItems = this.props.items;

    return(
      <div>
        <h1>--SIDEBAR--</h1>
        {this.renderSidebarItems(sidebarItems)}
      </div>
    )
  }
}

export default Sidebar;