import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => (
  <nav className="navbar">
    <div className="navbar-brand">
      <Link to="/"><div>Chicago</div><div><span>D</span><span id="art-parens">(ART)</span></div></Link>
    </div>
    <div className="navbar-menu-right">
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/events">Tickets & Events</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/auditions">Auditions</Link></li>
        <li><Link to="/accessibility">Accessibility</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
