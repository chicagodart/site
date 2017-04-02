import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadPages } from '../reducers/pages';

// components
import HeroImage from './HeroImage';
import Sidebar from './Sidebar';

class Donate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      video: false
    };
  }

  toggleVideoButton() {
    this.setState({ video: !this.state.video });
  }

  render() {
    const { page } = this.props;
    console.log(page);
    return (
      <div>
        <HeroImage src={page.acf.hero_image.sizes.medium_large} alt={page.acf.hero_image.alt} />

        <div className="max-width-12">
          <div className="clearfix content-sidebar-container">
            <div className="col col-8">
              {page.acf.map((header, i) =>
                <div key={i}>
                  <h2>{this.convertHeaders(header)}</h2><a name={header} />
                  <div className="video" dangerouslySetInnerHTML={{ __html: this.state.video ? this.props.page.acf[header] : this.props.page.acf[header].slice(0, this.props.page.acf[header].indexOf('iframe') - 1) }} />
                </div>
              )}
            </div>


            <div className="col col-4 center fixed-sidebar">
              <div>
                <div className="clearfix my1">
                  <a href="https://www.paypal.me/ChicagoDART">
                    <button type="button" name="donate" id="donate-button">
                      <span id="donate-button-text">DONATE</span>
                    </button>
                  </a>
                </div>
                <Sidebar listItems={this.props.page.acf} />
                <button id="toggle-video" onClick={this.toggleVideoButton.bind(this)}>{this.state.video ? 'Hide Video' : 'Show Video'}</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ pages }) => ({ pages });

const mapDispatchToProps = {
  loadPages
};

export default connect(mapStateToProps, mapDispatchToProps)(Donate);
