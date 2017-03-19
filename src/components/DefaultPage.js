import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import Sidebar from './Sidebar';

class DefaultPage extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log('hi props', this.props);
    const page = this.props.pages[this.props.match.path.replace('/', '')];
    console.log('PAGE', page, this.props.pages);
    return (
      <div>
        <div>

          <div className="hero-img">
            <img src="http://www.arshtcenter.org/Global/PressRoom/photos/hi/Spring%20Awakening%20photo%20by%20Paul%20Kolnick.jpg" alt="A scene from Spring Awakening" height="100%" width="100%" />
          </div>

          <div className="max-width-12 mx-auto">
            <div className="clearfix mx3">
              <div className="col col-8">
                <div>
                  <h2>{!!page && page.slug}</h2>
                  <p>sub-heading content</p>
                </div>

                <div>
                  <h2>Fill Sub-heading2</h2>
                  <p>sub-heading2 content</p>
                </div>

              </div>
              <div className="col col-4 center">
                <Sidebar items={this.state} />
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

}

const mapStateToProps = ({ pages }) => ({ pages });

export default connect(mapStateToProps)(DefaultPage);
