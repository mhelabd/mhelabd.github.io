import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Landing = () => (
  <section id="landing">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Michael Elabd</h2>
        <p><a href="mailto:mhelabd@cs.stanford.edu">mhelabd@cs.stanford.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        {/* TODO: ADD LINKS */}
        Hello, I am an Egyptian 🇪🇬 student at Stanford University
        studying Computer Science. My research experience is in
        artificial intelligence, and my academic interests
        are focused on deep learning, generative models, mathematics,
        philosophy, and international development.
        I enjoy reading about ethics of technology,
        poverty alleviation and community development,
        as well as philosophy. I am passionate about helping
        those in need because I believe that we
        all have a moral imperative towards one another.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default Landing;
