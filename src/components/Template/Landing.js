import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Landing = () => (
  <section id="landing">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="Profile" width="100%" height="auto" />
      </Link>
      <header>
        <h2>Michael Elabd</h2>
        <p>
          Research @ Google DeepMind
        </p>
        <p>
          Computer Science MS+BS @ Stanford
        </p>
        <ContactIcons />
      </header>
    </section>

    <section className="blurb">
      <h2>Intro</h2>
      {/* TODO: ADD LINKS */}
      <ul>
        <li>
          Hello, I work on the <b>Foundational Research Team at Google DeepMind</b>,
          specializing in developing new capabilities for large language models (LLMs).
        </li>
        <li>
          My professional interests include <b>deep learning</b>,
          <b>generative models</b>, <b>natural language</b>, and <b>computer vision</b>.
        </li>
        <li>
          Academically, I am deeply passionate about the <b>ethics of technology</b>,
          <b>poverty alleviation</b>, and <b>international development</b>.
        </li>
        <li>
          My intellectual pursuits include <b>philosophy</b>, <b>economics</b>,
          and <b>political science</b>.
        </li>
        <li>
          I am <b>deeply committed</b> to helping those in need and finding ways to use
          technology to make a <b>positive</b> and <b>meaningful</b> difference.
        </li>
      </ul>
    </section>

  </section>
);

export default Landing;
