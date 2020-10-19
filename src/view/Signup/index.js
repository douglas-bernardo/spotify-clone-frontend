import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container as ContainerBootstrap, Form, Row } from 'react-bootstrap';

import Logo from '../../components/Icons/Logo';
import { Section } from './styles';
import { Link } from 'react-router-dom';

export default function Signup() {

  const [email, setEmail] = useState('');
  const [email_confirm, setEmailConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickName] = useState('');
  const [gender, setGender] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();

    data.append('email', email);
    data.append('email_confirm', email_confirm);
    data.append('password', password);
    data.append('nickname', nickname);
    data.append('gender', gender);

    for (var value of data.values()) {
      console.log(value);
    }

  }

  return (

    <Section>
      <div className="headerSignup">
        <Link to={''}>
          <Logo />
        </Link>
        <h2>Inscreva-se grátis e comece a curtir.</h2>
      </div>

      <ContainerBootstrap id="container-boots">
        <Form onSubmit={handleSubmit} className="form_signup">

          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={event => setEmail(event.target.value)}
              autoComplete="on"
              />
          </Form.Group>

          <Form.Group controlId="formBasicEmailConfirm">
            <Form.Control 
              type="email" 
              placeholder="Confirmar email" 
              autoComplete="off" 
              onChange={event => setEmailConfirm(event.target.value)}
              />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control 
            type="password" 
            placeholder="Password" 
            autoComplete="off" 
            onChange={event => setPassword(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmailConfirm2">
            <Form.Control 
            type="text" 
            placeholder="Como podemos chamar você?" 
            autoComplete="off" 
            onChange={event => setNickName(event.target.value)}
            />
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Check type="radio" name="formHorizontalRadios" label="Feminino" id="formHorizontalRadios2" onClick={() => setGender('Feminino')} />
            <Form.Check type="radio" name="formHorizontalRadios" label="Masculino" id="formHorizontalRadios1" onClick={() => setGender('Masculino')} />
            <Form.Check type="radio" name="formHorizontalRadios" label="Não Binário" id="formHorizontalRadios3" onClick={() => setGender('Não Binário')} />
          </Form.Group>

          <div className="SugnupButton">
            <button type="submit">
              Inscreva-se
                </button>
          </div>

        </Form>
      </ContainerBootstrap>
    </Section>
  );
}
