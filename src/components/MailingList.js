import React, { Component } from 'react';

class MailingList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="hero-img">
          <img src="http://www.arshtcenter.org/Global/PressRoom/photos/hi/Spring%20Awakening%20photo%20by%20Paul%20Kolnick.jpg" alt="A scene from Spring Awakening" height="100%" width="100%" />
        </div>
        <div id="mc_embed_signup clearfix mx3">
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
              <h1>Subscribe to our mailing list</h1>
              <div className="mc-field-group col sm-col-6">
                <label htmlFor="mce-EMAIL">Email<span className="asterisk">*</span></label>
                <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
              </div>
              <div className="mc-field-group col sm-col-6">
                <label htmlFor="mce-FNAME">First Name </label>
                <input type="text" value="" name="FNAME" className="" id="mce-FNAME" />
              </div>
              <div className="mc-field-group col sm-col-6">
                <label htmlFor="mce-LNAME">Last Name </label>
                <input type="text" value="" name="LNAME" className="" id="mce-LNAME" />
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                <div className="response" id="mce-success-response" style={{ display: 'none' }} />
              </div>
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_9a004eb3afa0b524d3daa367b_93ba1f45a0" tabIndex="-1" value="" />
              </div>
              <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MailingList;
