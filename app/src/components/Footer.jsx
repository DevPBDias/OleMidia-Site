import React from 'react';
import logo from '../assets/footerOle.svg';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <img alt="footerOle" src={ logo } className="footerOle" />
      <p className="footerText">Copyright &copy 2023 - oléMídia & devPBDias </p>
    </footer>
  );
}

export default Footer;
