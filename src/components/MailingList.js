import React, { Component } from 'react';
import { resolve } from 'uri-js';
import { apiDomain } from '../../.config.json';

const root = apiDomain || '/';

class MailingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EMAIL: '',
      FNAME: '',
      LNAME: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="hero-img hero-img--top">
          <img src={resolve(root, '/wp-content/uploads/2017/04/ASL-Slam-Cizzy.png')} alt="Cizzy performing at ASL Slam" />
        </div>
        <div className="clearfix mx3" id="mc_embed_signup">
          <form
            action="//chicagodart.us14.list-manage.com/subscribe/post?u=9a004eb3afa0b524d3daa367b&amp;id=93ba1f45a0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              <h2 className="page-title">Subscribe to our Mailing List</h2>
              <div className="mc-field-group col sm-col-6">
                <label htmlFor="mce-EMAIL">Email<span className="asterisk">*</span></label>
                <input type="email" value={this.state.EMAIL} name="EMAIL" className="required email" id="mce-EMAIL" onChange={this.handleChange} />
              </div>
              <div className="mc-field-group col sm-col-6">
                <label htmlFor="mce-FNAME">First Name </label>
                <input type="text" value={this.state.FNAME} name="FNAME" id="mce-FNAME" onChange={this.handleChange} />
              </div>
              <div className="mc-field-group col sm-col-6">
                <label htmlFor="mce-LNAME">Last Name </label>
                <input type="text" value={this.state.LNAME} name="LNAME" id="mce-LNAME" onChange={this.handleChange} />
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                <div className="response" id="mce-success-response" style={{ display: 'none' }} />
              </div>
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_9a004eb3afa0b524d3daa367b_93ba1f45a0" tabIndex="-1" value="" />
              </div>
              <div className="mc-field-group col sm-col-6">
                <label />
                <button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn">
                  <span id="mailing-list-submit">Submit</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MailingList;
