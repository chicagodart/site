import React from 'react';
import { connect } from 'react-redux';

import { loadPages } from '../reducers/pages';
import { toggleVideo } from '../reducers/toggle';

import HeroImage from './HeroImage';

function stringToId(str) {
  return str.replace(/(^\s+|[^A-Za-z0-9\s]|\s$)/g, '').replace(/\s+/g, '_');
}

function Layout(props) {
  const { page, toggle } = props;
  const { video } = toggle;
  const anchors = [];
  let videoCount = 0;
  const content = page.content.rendered
    .replace(/\[vimeo=(https?:\/\/[^\]]+)\]/, (match, p1) => {
      videoCount++;
      return video ? `<iframe src="${p1}?portrait=0&badge=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`
        : '';
    })
    .replace(/(<h\d)>(.+?)(<\/h\d>)/g, (match, p1, p2, p3) => {
      const id = stringToId(p2);
      anchors.push([p2, `#${id}`]);
      return `${p1} id="${id}">${p2}${p3}`;
    });
  return (
    <main className="page-wrapper">

      <HeroImage
        src={page ? page.acf.hero_image.sizes.medium_large : ' '}
        alt={page ? page.acf.hero_image.title : ''}
        align={page ? page.acf.hero_image_align : ''}
      />

      <div className="max-width-12">
        {React.Children.map(props.children, child =>
          React.cloneElement(child, { ...props, content, anchors, videoCount }))}
      </div>

    </main>
  );
}
Layout.propTypes = {
  page: React.PropTypes.object.isRequired,
  toggle: React.PropTypes.object.isRequired
};

const mapStateToProps = ({ pages, toggle }) => ({ pages, toggle });

export default connect(mapStateToProps, { loadPages, toggleVideo })(Layout);
