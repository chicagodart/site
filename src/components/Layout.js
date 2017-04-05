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
    .replace(/\[vimeo=https?:\/\/([^\]]+)\]/g, (match, p1) => {
      const videoId = p1.replace(/^.*\/(\d+)$/, '$1');
      videoCount++;
      return video ? `<iframe src="https://player.vimeo.com/video/${videoId}" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`
        : '';
    })
    .replace(/(<h\d)>(.+?)(<\/h\d>)/g, (match, p1, p2, p3) => {
      const id = stringToId(p2);
      console.log('here is an anchor to push', [p2, `#${id}`]); // This is never getting hit on Donate page
      anchors.push([p2, `#${id}`]);
      return `${p1}><div id="${id}" class="anchor-adjust"></div>${p2}${p3}`;
    });
  return (
    <main id="main" className="page-wrapper">

      <HeroImage
        src={page ? page.acf.hero_image.sizes.medium_large : ''}
        alt={page ? page.acf.hero_image.title : ''}
        align={page ? page.acf.hero_image_align : ''}
      />

      <div className="max-width-12">
        {React.Children.map(props.children, (child) => {
          console.log('ABC', child);
          return React.cloneElement(child, { ...props, content, anchors, videoCount });
        })}
      </div>

    </main>
  );
}
Layout.propTypes = {
  page: React.PropTypes.object.isRequired,
  toggle: React.PropTypes.object.isRequired
};

const mapStateToProps = ({ toggle }) => ({ toggle });

export default connect(mapStateToProps, { loadPages, toggleVideo })(Layout);
