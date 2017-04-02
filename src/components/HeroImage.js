import React from 'react';
import { resolve } from 'uri-js';
import { apiDomain } from '../../.config.json';


const root = apiDomain || '/';

export default function HeroImage(props) {
  const { src, alt } = props;
  return (
    <div className="hero-img">
      <img src={resolve(root, src)} alt={alt} />
    </div>
  );
}

HeroImage.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired
};
