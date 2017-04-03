import React from 'react';

function Sidebar({ listItems }) {
  return (
    <div className="sidebar" >
      {!!listItems.length && <h3>Jump to:</h3> }
      { listItems && listItems.map((item) => {
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
      })}
    </div>
  );
}
Sidebar.propTypes = {
  listItems: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(React.PropTypes.string)
  )
};

Sidebar.defaultProps = {
  listItems: []
};

export default Sidebar;
