import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container as ContainerBootstrap,
  Form,
  Row
} from 'react-bootstrap';

import Logo from '../../components/Icons/Logo';

import { Section } from './styles';

export default class Signup extends Component {

  render() {
    return (
      <Section>
        <div className="headerSignup">
          <a>
            <Logo />
          </a>
          <h2>Inscreva-se grátis e comece a curtir.</h2>
        </div>

        <ContainerBootstrap id="container-boots">
          <Form className="form_signup">
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicEmailConfirm">
              <Form.Control type="email" placeholder="Confirmar email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicEmailConfirm">
              <Form.Control type="text" placeholder="Como podemos chamar você?" />
            </Form.Group>


            <Form.Group as={Row}>
              <Form.Check type="radio" name="formHorizontalRadios" label="Masculino" id="formHorizontalRadios1" />
              <Form.Check type="radio" name="formHorizontalRadios" label="Feminino" id="formHorizontalRadios2" />
              <Form.Check type="radio" name="formHorizontalRadios" label="Não Binário" id="formHorizontalRadios3" />
            </Form.Group>

            <div className="SugnupButton">
              <button type="submit">
                Inscreva-se
                </button>
            </div>

            {/* <Button variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
        </ContainerBootstrap>
      </Section>
    );
  }
}
