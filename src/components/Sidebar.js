import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sidebar extends Component {
  constructor(props){

    super(props)
    this.state = {
      items: props.listItems
    }

    this.renderSidebarItems = this.renderSidebarItems.bind(this);
    this.editHeadings = this.editHeadings.bind(this);
  }

  editHeadings(menuItem){
    let arr = menuItem.split('_')
    let listItem = ''
    arr.map( el => { listItem += (el + ' ') })
    
    return listItem
  }

  renderSidebarItems(items){

    return(
      <div>
        {
          items && Object.keys(items).map( (item, i) => {
            return(
              <div key={i}>
                <h3>{this.editHeadings(item)}</h3>
              </div>
            )
          })
        }
      </div>
    )
  }

  render(){
    let sidebarItems = this.props.listItems;

    return(
      <div>
        <h1>--SIDEBAR--</h1>
        {this.renderSidebarItems(sidebarItems)}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return ({page: state.props})
}

const mapDispatchToProps = () => {
  return{}
}

export default Sidebar;