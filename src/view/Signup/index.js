import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container as ContainerBootstrap, Form, Row } from 'react-bootstrap';
import api from '../../services/api';

import Logo from '../../components/Icons/Logo';
import { Section } from './styles';
import { Link } from 'react-router-dom';

export default function Signup() {

  //equivalente aos estados no modelo anterior
  const [email, setEmail] = useState('');
  const [email_confirm, setEmailConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [radioButton, setRadioButton] = useState(false);
 
  async function handleSubmit(e) {
    e.preventDefault();

    if (email !== email_confirm) {
      alert('email de confirmação não confere...');
      setEmailConfirm('');
      return;
    }

    const data = {
      email: email,
      nickname: nickname,
      password: password,
      birthday: birthday,
      gender: gender
    }

    await api.post('users', data);

    setEmail('');
    setEmailConfirm('');
    setPassword('');
    setNickName('');
    setBirthday('');
    setGender('');

    alert('Cadastro realizado com sucesso!');
    
  }


  function onClickAvailability(e) {    
    setGender(e.target.value);
    setRadioButton(true);
    console.log(e.target.value);
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
                name="email"
                placeholder="Enter email"
                onChange={event => setEmail(event.target.value)}
                autoComplete="on"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmailConfirm">
              <Form.Control
                type="email"
                value={email_confirm}
                name="email_confirm"
                placeholder="Confirmar email"
                autoComplete="off"
                onChange={event => setEmailConfirm(event.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Email não confere
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                autoComplete="off"
                onChange={event => setPassword(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="nickname">
              <Form.Control
                type="text"
                value={nickname}
                placeholder="Como podemos chamar você?"
                autoComplete="on"
                onChange={event => setNickName(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="birthday">
              <Form.Control
                type="date"
                value={birthday}
                placeholder="Data de nascimento"
                autoComplete="off"
                onChange={event => setBirthday(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group as={Row} required>
              <Form.Check value="F" type="radio" name="formHorizontalRadios" label="Feminino" id="formHorizontalRadios2" checked={gender === "F" && radioButton} onChange={onClickAvailability} />
              <Form.Check value="M" type="radio" name="formHorizontalRadios" label="Masculino" id="formHorizontalRadios1" checked={gender === "M" && radioButton} onChange={onClickAvailability} />
              <Form.Check value="NB" type="radio" name="formHorizontalRadios" label="Não Binário" id="formHorizontalRadios3" checked={gender === "NB" && radioButton} onChange={onClickAvailability} />
            </Form.Group>

            <div className="SignupButton">
              <button type="submit">
                Inscreva-se 
              </button>
            </div>
          </Form>
        </ContainerBootstrap>
      </Section>
    );
  }
