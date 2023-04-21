import React from 'react';
import logo from '../assets/headerOle.svg';
import instagramIcon from '../assets/instagramIcon.svg';
import twitterIcon from '../assets/twitterLogo.svg';
import '../css/Header.css';

function Header() {
  return (
    <header id="header" className="header">
      <div className="headerLinks">
        <img alt="oleHeader" src={ logo } className="oleHeader" />
        <nav className="navbarLinks">
          <a href="#home">Home</a>
          <a href="#services">Serviços</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
      <div className="headerIcons">
        <a href="https://www.instagram.com/olemidia/">
          <img alt="instagram" src={ instagramIcon } className="instagramIcon" />
        </a>
        <a href="https://twitter.com/olemidia">
          <img alt="instagram" src={ twitterIcon } className="instagramIcon" />
        </a>
      </div>
    </header>
  );
}

export default Header;
