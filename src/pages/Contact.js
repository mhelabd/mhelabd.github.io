import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Michael Elabd via email"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <div style={{ marginLeft: '0.5em' }}>
          <span>mhelabd at alumni dot stanford dot edu</span>
        </div>
        <div style={{ marginLeft: '0.5em' }}>
          <span>you at michaelelabd dot com</span>
        </div>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
