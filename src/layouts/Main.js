import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import ScrollToTop from '../components/Template/ScrollToTop';
import Splash from '../components/Template/Splash';

const Main = (props) => {
  const [isLoading, setLoading] = useState(localStorage.getItem('previouslyVisited') === null);
  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('previouslyVisited');
    });
    const timeout = setTimeout(() => {
      localStorage.setItem('previouslyVisited', true);
      setLoading(false);
    }, 1900);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  if (isLoading) {
    return (
      <HelmetProvider>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '85vh',
          width: '100%',
        }}
        >
          <Splash width={500} height={500} />
        </div>
      </HelmetProvider>
    );
  }
  return (
    <HelmetProvider>
      <Analytics />
      <ScrollToTop />
      <Helmet titleTemplate="%s | Michael Elabd" defaultTitle="Michael Elabd" defer={false}>
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description} />
      </Helmet>
      <div id="wrapper">
        <Navigation />
        <div id="main">
          {props.children}
        </div>
      </div>
    </HelmetProvider>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  title: null,
  description: "Michael Elabd's personal website.",
};

export default Main;
