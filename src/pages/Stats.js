import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';

// interesting facts, short form, countries, travel related
const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Michael Elabd and mldangelo.com"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/stats">Stats</Link></h2>
        </div>
      </header>
      <Personal />
      {/* <Site /> */}
    </article>
  </Main>
);

export default Stats;
