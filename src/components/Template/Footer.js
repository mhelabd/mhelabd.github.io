import React from 'react';
import ContactIcons from '../Contact/ContactIcons';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <ContactIcons />
      <p>Copyright &copy; {year} Michael Elabd.<br />All rights reserved.</p>
    </footer>
  );
};

export default Footer;
