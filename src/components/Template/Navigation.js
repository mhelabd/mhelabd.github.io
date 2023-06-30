import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercentage = (100 * window.scrollY) / (docHeight - winHeight);
      setBackgroundColor(`rgba(255, 255, 255, ${scrollPercentage})`);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header id="header">
      {console.log(backgroundColor)}
      <h1 className="index-link" style={{ backgroundColor }}>
        {routes.filter((l) => l.index).map((l) => (
          <Link key={l.label} to={l.path}>{l.label}</Link>
        ))}
      </h1>
      <nav className="links">
        <ul style={{ backgroundColor }}>
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
