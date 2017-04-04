import React from 'react';
import { connect } from 'react-redux';

import { loadPages } from '../reducers/pages';

import Sidebar from './Sidebar';

function Donate({ content, videoCount, page, toggleVideo, anchors, toggle }) {
  return (
    <div className="max-width-12">
      <div className="clearfix content-sidebar-container">
        <div className="col col-8" dangerouslySetInnerHTML={{ __html: content }} />

        <div className="col col-4 center fixed-sidebar">

          <div className="clearfix my1">
            <a href="https://www.paypal.me/ChicagoDART">
              <button type="button" name="donate" className="btn btn--large btn--invert">DONATE</button>
            </a>
          </div>
          <Sidebar listItems={anchors} />
          {!!videoCount &&
            <button className="btn" onClick={toggleVideo}>
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
