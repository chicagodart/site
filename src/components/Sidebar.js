import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.listItems
    };
  }

  render() {
    const { listItems } = this.props;

    return (
      <div >
        <h3>Jump to:</h3>
        {
          listItems && listItems.map((item) => {
            let value;
            let label;
            if (Array.isArray(item)) {
              label = item[0];
              value = item[1];
            } else label = value = item;
            return (
              <div id="menu-item" key={value}>
                <a href={`#${value}`}>{label}</a>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Sidebar;
