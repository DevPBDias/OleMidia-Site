import React from 'react'
import logo from '../assets/footerOle.svg'
import '../css/Footer.css';

function Footer() {
    return (
        <footer class="footer">
            <img alt="footerOle" src={logo} class="footerOle" />
            <p class="footerText">Copyright &copy 2023 - oléMídia & devPBDias </p>
        </footer>
    )
}

export default Footer