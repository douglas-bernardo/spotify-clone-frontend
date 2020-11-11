import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container as ContainerBootstrap, Form } from 'react-bootstrap';

import { Container, MainViewPlayList } from '../../components/Container';
import SideBar from '../../components/SideBar';
import api from '../../services/api';

import { Panel } from './styles';

export default function Profile() {

    const history = useHistory();

    const [user_id, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickName] = useState('');
    const [birthday, setBirthday] = useState('');

    // inicia primeiro  

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("@spotify/user"));

        // http://localhost:3004/users/2

        api.get(`/users/${user.id}`).then(response => {

            const user_data = response.data;

            setUserId(user_data.id);
            setEmail(user_data.email);
            setNickName(user_data.nickname);
            setBirthday(user_data.birthday);

        });        

    }, []);


    async function handleSubmit(e) {
        // evita o refresh
        e.preventDefault();

        const data = {
            email: email,
            nickname: nickname,
            password: password,
            birthday: birthday
        }
        // editar
        await api.put(`users/${user_id}`, data);

        // redireciona para overview
        history.push('/account/overview');

    }

    return (
        <Container>
            <SideBar />
            <MainViewPlayList>
                <Panel>
                    <h1>Editar perfil</h1>
                    <ContainerBootstrap className="editProfile">
                        <Form onSubmit={handleSubmit} className="form_signup">

                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    type="email"
                                    value={email || ''}
                                    name="email"
                                    placeholder="Enter email"
                                    onChange={event => setEmail(event.target.value)}
                                    autoComplete="on"
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                    type="text"
                                    value={nickname || ''}
                                    placeholder="Apelido"
                                    autoComplete="off"
                                    onChange={event => setNickName(event.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                    type="password"
                                    value={password || ''}
                                    placeholder="Password"
                                    autoComplete="off"
                                    onChange={event => setPassword(event.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="birthday">
                                <Form.Control
                                    type="date"
                                    value={birthday || ''}
                                    autoComplete="on"
                                    onChange={event => setBirthday(event.target.value)}
                                />
                            </Form.Group>

                            <button className="btnSaveProfileChanges">
                            Salvar
                            </button> 

                        </Form>                     
                    </ContainerBootstrap>
                </Panel>
            </MainViewPlayList>
        </Container>
    );
}
