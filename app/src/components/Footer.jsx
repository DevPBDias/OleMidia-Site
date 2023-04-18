import React from 'react';
import logo from '../assets/footerOle.svg';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <img alt="footerOle" src={ logo } className="footerOle" />
      <p className="footerText">Copyright 2023 - Olé Mídia & devPBDias </p>
    </footer>
  );
}

export default Footer;
