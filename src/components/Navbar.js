import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFontSize, toggleContrast } from '../reducers/toggle';
import NavbarMenu from './NavbarMenu';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    this.setState({
      menu: !this.state.menu
    });
  }

  render() {
    const toggleContrast = this.props.toggleContrast;
    const toggleFontSize = this.props.toggleFontSize;
    return (
      <div className="clearfix">
        <nav className="navbar col col-12">
          <a href="#main" className="skip-nav">Skip to main content</a>
          <div className="navbar-container">
            <h1 className="navbar-brand">
              <Link to="/" aria-label="Chicago Dart">
                <div aria-hidden="true">Chicago</div>
                <div aria-hidden="true"><span>D</span><span id="art-parens">(ART)</span></div>
              </Link>
            </h1>
            <div className="navbar-menu-center">
              <NavbarMenu showMenu={this.state.menu} toggleMenu={this.toggleMenu} />
            </div>
            <div className="navbar-menu-right">
              <ul>
                <li>
                  <button className="navbar-button" aria-label="Toggle high-contrast view" onClick={toggleContrast}>
                    <i className="fa fa-adjust fa-lg" title="Toggle light/dark view" />
                  </button>
                </li>
                <li>
                  <button className="navbar-button" aria-label="Toggle large-font view" onClick={toggleFontSize}>
                    <i className="fa fa-font fa-lg" title="Toggle to large font view" />
                  </button>
                </li>
                <li className="toggle-nav">
                  <button className="navbar-button" aria-hidden="true" onClick={this.toggleMenu}>
                    <i className="fa fa-bars fa-lg" aria-hidden="true" />
                  </button>
                </li>
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
