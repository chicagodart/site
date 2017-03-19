import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.listItems
    };

    this.renderSidebarItems = this.renderSidebarItems.bind(this);
    this.editHeadings = this.editHeadings.bind(this);
  }

  editHeadings(menuItem) {
    return menuItem.split('_').join(' ');
  }

  renderSidebarItems(items) {
    return (
      <div>
        {
          items && Object.keys(items).map((item, i) => (
            <div key={i} className="sidebar-item">
              <a href={`#${item}`}>{this.editHeadings(item)}</a>
            </div>
            ))
        }
      </div>
    );
  }

  render() {
    const sidebarItems = this.props.listItems;

    return (
      <div id="fixed-sidebar">
        <h3>Jump to:</h3>
        {this.renderSidebarItems(sidebarItems)}
      </div>
    );
  }
}

export default Sidebar;
