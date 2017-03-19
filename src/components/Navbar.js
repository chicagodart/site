import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFontSize, toggleContrast } from '../reducers/toggle';

const Navbar = ({ toggleFontSize, toggleContrast }) => (
  <div className="clearfix">
    <nav className="navbar col col-12">
      <div className="navbar-brand">
        <Link to="/">
          <div>Chicago</div>
          <div><span>D</span><span id="art-parens">(ART)</span></div>
        </Link>
      </div>
      <div className="navbar-menu-center">
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/events">Tickets & Events</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/auditions">Auditions</Link></li>
          <li><Link to="/accessibility">Accessibility</Link></li>
        </ul>
      </div>
      <div className="navbar-menu-right">
        <ul>
          <li onClick={toggleContrast}>
            <a href="#">
              <i className="fa fa-adjust fa-lg" title="Toggle light/dark view" />
            </a>
          </li>
          <li onClick={toggleFontSize}>
            <a href="#">
              <i className="fa fa-font fa-lg" title="Toggle to large font view" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

Navbar.propTypes = {
  toggleFontSize: PropTypes.func,
  toggleContrast: PropTypes.func,
};

export default connect(() => ({}), { toggleFontSize, toggleContrast })(Navbar);
