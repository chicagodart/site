import React from 'react';

function Sidebar({ listItems }) {
  return (
    <div>
      {!!listItems.length && <h3 className="sidebar-title">Jump to:</h3> }
      { listItems && listItems.map((item) => {
        let href;
        let content;
        if (Array.isArray(item)) {
          content = item[0];
          href = item[1];
        } else content = href = item;
        return (
          <div className="menu-item" key={href}>
            <a href={`${href}`} dangerouslySetInnerHTML={{ __html: content }} />
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
