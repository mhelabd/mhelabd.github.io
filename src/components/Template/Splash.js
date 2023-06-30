import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Splash = (props) => {
  const splashGIF = '/images/logo/Michael Elabd Transparent.gif';
  const splashPNG = '/images/logo/Michael Elabd Transparent.png';
  const [src, setSrc] = useState(splashGIF);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(splashPNG);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <img src={src} alt="Loading..." width={props.width} height={props.height} />
  );
};

Splash.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

Splash.defaultProps = {
  width: 500,
  height: 500,
};

export default Splash;
