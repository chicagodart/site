import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
      <div className="footer">
        <section className="sm-col-12 md-col-4 lg-col-4">
          <h1 className="h3">Contact Us:</h1>
        </section>
        <section className="sm-col-12 md-col-4 lg-col-4">
          <ul>
            <li>
              <i className="fa fa-facebook-official" aria-hidden="true" />
            </li>
            <li>
              <i className="fa fa-twitter-square" aria-hidden="true" />
            </li>
            <li>
              <i className="fa fa-instagram" aria-hidden="true" />
            </li>
          </ul>
        </section>
        <section className="sm-col-12 md-col-4 lg-col-4">

        </section>
      </div>
    )
  }
}

export default Footer;