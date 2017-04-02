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
            let href;
            let content;
            if (Array.isArray(item)) {
              content = item[0];
              href = item[1];
            } else content = href = item;
            return (
              <div id="menu-item" key={href}>
                <a href={`${href}`}>{content}</a>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Sidebar;
