import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => (
  <nav className="navbar">
    <div className="navbar-brand">
      <Link to="/">Chicago D(ART)</Link>
    </div>
    <div className="navbar-menu-right">
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Tickets & Events</Link></li>
        <li><Link to="/">Donations</Link></li>
        <li><Link to="/">Auditions</Link></li>
        <li><Link to="/">Accessibility</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
