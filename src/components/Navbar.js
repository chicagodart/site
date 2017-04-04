import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFontSize, toggleContrast } from '../reducers/toggle';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.showHideMenu = this.showHideMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      menu: !this.state.menu
    });
  }

  closeMenu() {
    this.setState({
      menu: false
    });
  }

  showHideMenu() {
    if (this.state.menu) {
      return '';
    }
    return 'hide-menu';
  }

  render() {
    const toggleContrast = this.props.toggleContrast;
    const toggleFontSize = this.props.toggleFontSize;
    return (
      <div className="clearfix">
        <nav className="navbar col col-12">
          <div className="navbar-container">
            <h1 className="navbar-brand">
              <Link to="/">
                <div>Chicago</div>
                <div><span>D</span><span id="art-parens">(ART)</span></div>
              </Link>
            </h1>
            <nav className="navbar-menu-center">
              <ul className={this.showHideMenu()}>
                <li onClick={this.closeMenu}><Link to="/about">About</Link></li>
                <li onClick={this.closeMenu}><Link to="/events">Tickets & Events</Link></li>
                <li onClick={this.closeMenu}><Link to="/donate">Donate</Link></li>
                <li onClick={this.closeMenu}><Link to="/auditions">Auditions</Link></li>
                <li onClick={this.closeMenu}><Link to="/accessibility">Accessibility</Link></li>
              </ul>
            </nav>
            <div className="navbar-menu-right">
              <ul>
                <li onClick={toggleContrast}>
                  <button className="navbar-button">
                    <i className="fa fa-adjust fa-lg" title="Toggle light/dark view" />
                  </button>
                </li>
                <li onClick={toggleFontSize}>
                  <button className="navbar-button">
                    <i className="fa fa-font fa-lg" title="Toggle to large font view" />
                  </button>
                </li>
                <button className="navbar-button">
                  <i className="fa fa-bars fa-lg toggle-nav" onClick={this.toggleMenu} aria-hidden="true" />
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  toggleFontSize: PropTypes.func,
  toggleContrast: PropTypes.func
};

export default connect(() => ({}), { toggleFontSize, toggleContrast })(Navbar);
