import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render(){
    return (
      <div className="footer">
        <ul className="footer-group">
          <li className="col sm-col-12 md-col-4 lg-col-4">
            <h1 className="h3 footer-text">Contact Us:</h1>
            <a href="mailto:info@chicagodart.com" rel="noopener noreferrer" target="_blank"><h2 className="h3 footer-text">info@chicagodart.com</h2></a>
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
              <h1 className="h3 footer-text">Join our mailing list!</h1>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
