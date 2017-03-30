import React, { Component } from 'react';

// components
import Sidebar from './Sidebar';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadPages } from '../reducers/pages';

import HeroImage from './HeroImage';

class DefaultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: false,
    };
  }

  convertHeading(heading) {
    return heading.slice(8).split('_')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
  }

  toggleVideoButton() {
    this.setState({ video: !this.state.video });
  }

  render() {
    const { page } = this.props;
    const sections = page
      ? Object.keys(page.acf)
        .filter(key => key.slice(0, 8) === 'heading_')
        .map(key => ({ heading: this.convertHeading(key), content: page.acf[key], key }))
      : [];
    return (
      <div>

        <HeroImage src={page ? page.acf.hero_image.sizes.medium_large : ' '} alt={page ? page.acf.hero_image.title : ''} />

        <div className="max-width-12">
          <div className="clearfix content-sidebar-container">
            <div className="col col-8">
              <div>
                <div dangerouslySetInnerHTML={{ __html: page ? page.content.rendered : '' }} />
                {page &&
                  sections.map(({ heading, content }) => (<div key={heading}>
                    <h2>{heading}</h2><a name={heading} />
                    <div dangerouslySetInnerHTML={{ __html: this.state.video ? content : content.slice(0, content.indexOf('iframe') - 1) }} />
                  </div>))}
              </div>

            </div>
            <div className="col col-4 center fixed-sidebar">
              <Sidebar listItems={sections.map(section => section.heading)} />
              <button id="toggle-video" onClick={this.toggleVideoButton.bind(this)}>{this.state.video ? 'Hide Video' : 'Show Video'}</button>
            </div>
          </div>
        </div>

      </div>
    );
  }

}
const mapStateToProps = ({ pages }) => ({ pages });

export default connect(mapStateToProps, { loadPages })(DefaultPage);
