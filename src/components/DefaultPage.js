import React, { Component } from 'react';

// components
import Sidebar from './Sidebar';
import { connect } from 'react-redux';

function DefaultPage({ content, videoCount, page, toggleVideo, anchors, toggle }) {
  return (
    <div className="max-width-12">
      <h2 className="page-title">{page.title.rendered}</h2>
      <div className="clearfix content-sidebar-container mxn3">
        <div className="col col-8 px3" dangerouslySetInnerHTML={{ __html: content }} />
        <div className="col col-4 px3 fixed-sidebar">
          <Sidebar listItems={anchors} />
          {!!videoCount &&
            <button className="btn toggle-video" onClick={toggleVideo}>
              {toggle.video ? 'Hide Video' : 'Show Video'}
            </button>
          }
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ pages, toggle }) => ({ pages, toggle });

export default connect(mapStateToProps)(DefaultPage);
