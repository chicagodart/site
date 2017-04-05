import React from 'react';
import { connect } from 'react-redux';

import { loadPages } from '../reducers/pages';

import Sidebar from './Sidebar';

function Donate({ content, videoCount, page, toggleVideo, anchors, toggle }) {
  console.log('anchors', anchors);
  return (
    <div className="max-width-12">
      <h2 className="page-title">Donate</h2>
      <div className="clearfix mxn1 content-sidebar-container">
        <div className="col col-8 px1" dangerouslySetInnerHTML={{ __html: content }} />
        <div className="col col-4 px1 center fixed-sidebar">
          <div className="clearfix my1">
            <a href="https://www.paypal.me/ChicagoDART">
              <button type="button" name="donate" className="btn btn--large btn--invert">Donate Now</button>
            </a>
          </div>
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

const mapStateToProps = ({ pages }) => ({ pages });

const mapDispatchToProps = {
  loadPages
};

export default connect(mapStateToProps, mapDispatchToProps)(Donate);
