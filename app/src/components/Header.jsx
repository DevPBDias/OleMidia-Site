import React from 'react'
import logo from '../assets/headerOle.svg'
import instagramIcon from '../assets/instagramIcon.svg'
import '../css/Header.css';

function Header() {
  return (
    <header class="header">
    <div class="headerLinks">
        <img alt="oleHeader" src={logo} class="oleHeader" />
        <nav>
            <ol class="navbarLinks">
                <ul><a href="#home">Home</a> </ul>
                <ul><a href="#services">Serviços</a></ul>
                <ul><a href="#portolio">Portfólio</a></ul>
                <ul><a href="#contact">Contato</a></ul>
            </ol>
        </nav>
    </div>
    <div class="headerIcons">
        <a href="https://www.instagram.com/olemidia/">
            <img alt="instagram" src={instagramIcon} class="instagramIcon" />
        </a>
        <a href="https://www.instagram.com/olemidia/">
            <img alt="instagram" src={instagramIcon} class="instagramIcon" />
        </a>
    </div>
</header>
  )
}

export default Header