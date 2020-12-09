import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container as ContainerBootstrap, Table } from 'react-bootstrap';

import { Container, MainViewPlayList } from '../../components/Container';
import SideBar from '../../components/SideBar';
import api from '../../services/api';

import { Panel } from './styles';

export default function AcountOverview() {
    //const [currentUser, setCurrentUser] = useState({});

    const [email, setEmail] = useState('');
    const [nickname, setNickName] = useState('');
    const [birthday, setBirthday] = useState('');

    //* chamada api json-server pega os dados do usuário
    useEffect(() => {    
            
        const user = JSON.parse(localStorage.getItem("@spotify/user"));

        api.get(`/users/${user._id}`).then(response => {

            const user_data = response.data;
            setEmail(user_data.email);
            setNickName(user_data.nickname);
            setBirthday(user_data.birthday);
            
        }); 

    }, []);

    return (        
        <Container>
            
            <SideBar />
            <MainViewPlayList>
                <Panel>
                    <h1>Visão geral da conta</h1>

                    <ContainerBootstrap fluid>
                        
                            <Table hover variant="dark" id="table-music">
                                <tbody>
                                    <tr>
                                        <td>Apelido</td>
                                        <td>{nickname}</td>
                                    </tr>
                                    <tr>
                                        <td>E-mail</td>
                                        <td>{email}</td>
                                    </tr>
                                    <tr>
                                        <td>Data de Nascimento</td>
                                        <td>{birthday}</td>
                                    </tr>
                                </tbody>                                
                            </Table>                            
                        
                    </ContainerBootstrap>

                    <Link to={'/profile'} className="btnEditProfile">
                        Editar Perfil
                    </Link>

                </Panel>
            </MainViewPlayList>
        </Container>
    );
}
