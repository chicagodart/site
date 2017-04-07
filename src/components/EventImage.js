import React from 'react';
import { resolve } from 'uri-js';
import { apiDomain } from '../../.config.json';


const root = apiDomain || '/';

export default function EventImage(props) {
  const { src, alt, align } = props;
  const alignClass = align ? `event-img--${align}` : '';

  return (
    <div className={`event-img ${alignClass}`}>
      <img src={resolve(root, src)} alt={alt} />
    </div>
  );
}

EventImage.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired,
  align: React.PropTypes.string
};

EventImage.defaultProps = {
  align: ''
};
