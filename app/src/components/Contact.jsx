import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <section id="contact">
      <form className="contactContainer" id="submit" action="#">
        <p className="titleContact">Contato</p>
        <input
          type="text"
          id="name"
          placeholder="Nome"
          className="inputContact"
        />
        <input
          type="text"
          id="email"
          placeholder="E-mail"
          className="inputContact"
        />
        <input
          type="text"
          id="subject"
          placeholder="Assunto"
          className="inputContact"
        />
        <textarea
          placeholder="Mensagem"
          className="textAreaContact"
          name=""
          id="message"
          cols="30"
          rows="10"
        />
        <button
          type="submit"
          className="contactBtn"
        >
          ENVIAR MENSAGEM
        </button>
      </form>
    </section>
  );
}

export default Contact;
