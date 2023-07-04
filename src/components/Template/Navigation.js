import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [color, setTextColor] = useState('#000000');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = Math.min(1, (window.scrollY) / (48));
      if (scrollPercentage > 0.5) {
        setBackgroundColor(`rgba(60, 60, 60, ${scrollPercentage})`);
        setTextColor(`rgba(255, 255, 255, ${scrollPercentage})`);
      } else {
        setBackgroundColor(`rgba(255, 255, 255, ${1 - scrollPercentage})`);
        setTextColor(`rgba(0, 0, 0, ${1 - scrollPercentage})`);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header id="header" style={{ backgroundColor }}>
      <h1 className="index-link" style={{ color }}>
        {routes.filter((l) => l.index).map((l) => (
          <Link key={l.label} to={l.path}>{l.label}</Link>
        ))}
      </h1>
      <nav className="links" style={{ color }}>
        <ul>
          {routes.filter((l) => !l.index).map((l) => (
            <li key={l.label}>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Hamburger />
    </header>
  );
};

export default Navigation;
