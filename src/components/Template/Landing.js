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
        <ContactIcons />
      </header>
    </section>

    <section className="blurb">
      <h2>Intro</h2>
      {/* TODO: ADD LINKS */}
      <p>
        <ul>
          <li>
            Hello, I am a <b>Machine Learning Research Engineer at Google</b>,
            focusing on building foundational models for sensor data.
          </li>
          <li>
            I studied <b>Computer Science (AI Track) and Mathematics at Stanford University</b>.
          </li>
          <li>
            My professional interests include deep learning,
            generative models, natural language, and computer vision.
          </li>
          <li>
            My academic passions include ethics of technology,
            poverty alleviation and international development.
          </li>
          <li>
            My intellectual pursuits include philosophy, economics, and political science.
          </li>
          <li>
            I am passionate about helping those in need because
            I believe that we all have a moral imperative towards one another.
          </li>
        </ul>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? <Link to="/about" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

  </section>
);

export default Landing;
