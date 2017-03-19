import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul className="footer-group">
          <li className="col sm-col-12 md-col-4 lg-col-4">
            <h3 className="footer-text h4">Contact Us:</h3>
            <a href="mailto:info@chicagodart.com" rel="noopener noreferrer" target="_blank">info@chicagodart.com</a>
          </li>
          <li className="col sm-col-12 md-col-4 lg-col-4">
            <ul className="social">
              <li>
                <a href="https://www.facebook.com/chicagoDART/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-official" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/chicagodart?lang=en" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/chicagodart/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </li>
          <li className="col sm-col-12 md-col-4 lg-col-4">
            <Link to="/mailing">
              <span className="footer-text">Join our mailing list!</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
