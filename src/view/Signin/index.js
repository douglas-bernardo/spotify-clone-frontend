import React, { useState } from 'react';
import { Section } from './styles';
import { Link, Redirect } from 'react-router-dom';
import Logo from '../../components/Icons/Logo';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles"
import { Container as ContainerBootstrap, Form } from 'react-bootstrap';
import api from '../../services/api';

export default function Signin({login}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isAuth, setIsAuth] = useState(false)
    const [isEmailInvalid, setEmailInvalid] = useState(false)
    const [isPasswordInvalid, setPasswordInvalid] = useState(false)
    async function handleSubmit(e) {
        e.preventDefault();

        await api.get(`/users?email=${email}`).then( res => {
            const { data } = res
            if(data.length === 1){
                if(data[0].password === password) {
                    login(data[0])
                    setIsAuth(true)
                } else {
                    setPasswordInvalid(true)
                }
            } else {
                setEmailInvalid(true)
            }
        })
    }

    return(
        <Section>
            {isAuth ? <Redirect to={''} /> : null}
            <div className="headerSignup">
                <Link to={''}>
                <Logo />
            </Link>
            <h2>Para continuar, faça login no Spotify.</h2>
          </div>
          <ContainerBootstrap id="container-boots">
            <Form onSubmit={handleSubmit} className="form_signup">
                <Form.Group>
                    <Form.Control
                        className={isEmailInvalid ? "inputInvalid" : ""}
                        type= "email"
                        name='email'
                        placeholder="Enter email"
                        value={email}
                        onChange={event => {
                            setEmail(event.target.value) 
                            setEmailInvalid(false) 
                        }}
                        required
                        autoComplete="on"
                    />
                    {isEmailInvalid ? <div className="invalidText"> *Email não encontrado </div> : null}
                    
                </Form.Group>
                
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                className={isPasswordInvalid ? "inputInvalid" : ""}
                type="password"
                value={password}
                placeholder="Password"
                autoComplete="off"
                onChange={event => {
                    setPassword(event.target.value)
                    setPasswordInvalid(false)
                }}
                required
              />
              {isPasswordInvalid ? <div className="invalidText">*Senha incorreta</div> : null}
            </Form.Group>

            <div className="SugnupButton">
              <button type="submit">
                Login 
            </button>
            </div>
            </Form>
          </ContainerBootstrap>
        </Section>
    )
}