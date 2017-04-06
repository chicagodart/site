import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';

class NavbarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.showHideMenu = this.showHideMenu.bind(this);
  }

  handleClick(e) {
    this.props.toggleMenu(e);
  }

  showHideMenu() {
    if (this.props.showMenu) {
      return '';
    }
    return 'hide-menu';
  }

  handleClickOutside(e) {
    if (e.target.tagName.toLowerCase() !== 'i' && this.props.showMenu) {
      this.props.toggleMenu(e);
    }
  }

  render() {
    return (

      <ul className={this.showHideMenu()}>
        <li id="navbar-menu-home" onClick={this.handleClick}><Link to="/">Home</Link></li>
        <li onClick={this.handleClick}><Link to="/about">About</Link></li>
        <li onClick={this.handleClick}><Link to="/events">Tickets & Events</Link></li>
        <li onClick={this.handleClick}><Link to="/donate">Donate</Link></li>
        <li onClick={this.handleClick}><Link to="/auditions">Auditions</Link></li>
        <li onClick={this.handleClick}><Link to="/accessibility">Accessibility</Link></li>
      </ul>

    );
  }
}

NavbarMenu.propTypes = {
  toggleMenu: PropTypes.func,
  showMenu: PropTypes.bool
};

export default onClickOutside(NavbarMenu);
