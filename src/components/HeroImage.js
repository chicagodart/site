import React from 'react';

export default function HeroImage(props) {
  console.log(props);
  const { src, alt } = props;
  return (
    <div className="hero-img">
      <img src={`http://chicagodart.azurewebsites.net${src}`} alt={alt} />
    </div>
  );
}

HeroImage.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired
};
