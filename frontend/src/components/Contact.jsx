import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import emailjs from '@emailjs/browser';
import '../css/Contact.css';

const TIMER = 3000;

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [emptyInputs, setEmptyInputs] = useState(false);
  const [correctSubmit, setCorrectSubmit] = useState(false);

  const setEmptyStates = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const sendEmail = () => {
    const template = {
      from_name: name,
      email,
      message,
      subject,
    };

    emailjs.send('service_c0dyi0t', 'template_pxeokfc', template, 'K9YPasuHtbdSlNyI_')
      .then((response) => {
        console.log('Email enviado', response.status, response.text);
        setEmptyStates();
      }, (error) => {
        console.log('Error: ', error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const condition = name === '' || email === '' || subject === '' || message === '';
    if (condition) {
      setEmptyInputs(true);
      setTimeout(() => setEmptyInputs(false), TIMER);
    } else {
      setCorrectSubmit(true);
      setTimeout(() => setCorrectSubmit(false), TIMER);
      sendEmail();
    }
  };

  return (
    <section id="contact">
      <form className="contactContainer" onSubmit={ handleSubmit } action="#">
        <p className="titleContact">Contato</p>
        <input
          type="text"
          name="name"
          value={ name }
          placeholder="Nome"
          className="inputContact"
          onChange={ ({ target }) => setName(target.value) }
        />
        <input
          type="text"
          name="email"
          value={ email }
          placeholder="E-mail"
          className="inputContact"
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          type="text"
          name="subject"
          value={ subject }
          placeholder="Assunto"
          className="inputContact"
          onChange={ ({ target }) => setSubject(target.value) }
        />
        <textarea
          placeholder="Mensagem"
          className="textAreaContact"
          name="message"
          value={ message }
          cols="30"
          rows="10"
          onChange={ ({ target }) => setMessage(target.value) }
        />
        {
          emptyInputs ? (
            <Alert className="alert" variant="outlined" severity="warning">
              Por favor, preencha os campos corretamente.
            </Alert>
          ) : ''
        }
        {
          correctSubmit ? (
            <Alert className="alert" variant="outlined" severity="success">
              Mensagem a
              {' '}
              <strong>oléMídia</strong>
              , obrigado!
            </Alert>
          ) : ''
        }
        <button
          type="submit"
          className="contactBtn"
        >
          ENVIAR
        </button>
      </form>
    </section>
  );
}

export default Contact;
