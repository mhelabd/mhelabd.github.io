import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const ContactIcons = () => (
  <ul className="icons">
    {data.map((s) => (
      <li key={s.label}>
        <a href={s.link} alt>
          <FontAwesomeIcon icon={s.icon} title={s.label} />
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
