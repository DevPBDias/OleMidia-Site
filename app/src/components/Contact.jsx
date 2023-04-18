import React from 'react'
import '../css/Contact.css';

function Contact() {
    return (
        <section id="contact">
            <form class="contactContainer" id="submit" action="#">
                <p class="titleContact">Contato</p>
                <input type="text" id="name" placeholder="Nome" class="inputContact"></input>
                <input type="text" id="email" placeholder="E-mail" class="inputContact"></input>
                <input type="text" id="subject" placeholder="Assunto" class="inputContact"></input>
                <textarea placeholder="Mensagem" class="textAreaContact" name="" id="message" cols="30" rows="10"></textarea>
                <button type="submit" class="contactBtn">ENVIAR MENSAGEM</button>
            </form>
        </section>
    )
}

export default Contact