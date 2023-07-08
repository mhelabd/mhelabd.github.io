import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Landing from '../components/Template/Landing';

const Index = () => (
  <Main
    description="Michael Elabd's personal website"
  >
    <article className="post" id="index">
      <Landing />
      <>
        <p> You can read more in the <Link to="/personal">about</Link> section,
          or you can check out my {' '}
          <Link to="/resume">resume</Link>, {' '}
          {/* <Link to="/projects">projects</Link>, {' '} */}
          view <Link to="/stats">site statistics</Link>, {' '}
          or <Link to="/contact">contact</Link> me.
        </p>
        <p><a href="https://github.com/mldangelo/personal-site">Website inspiration</a>.</p>
      </>
    </article>
  </Main>
);

export default Index;
