import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, MainViewPlayList } from '../../components/Container';
import SideBar from '../../components/SideBar';
import api from '../../services/api';

import { List, PlaylistRow, Item } from './styles';

export default function Collection() {
    
    const [currentUser, setCurrentUser] = useState({});
    const [collection, setCollection] = useState([]);

    useEffect(()=>{
        setCurrentUser(JSON.parse(localStorage.getItem("@spotify/user")));
        const user = JSON.parse(localStorage.getItem("@spotify/user"));
        if (user)
        api.get(`/playlists/owner/${user._id}`)
            .then(response => {
            setCollection(response.data);        
        })
    },[]);

    return (
        <Container>
            <SideBar />
            <MainViewPlayList>
                {(localStorage.getItem("@spotify/user") === null) ?
                    (
                        <List className="list">
                            <h1>Bem vindo ao Spotify! Faça login para curtir suas músicas!</h1>
                        </List>
                    ) : (
                        <List className="list">
                            <PlaylistRow className="playlistrow">
                                <div className="genero">
                                    <h1>Olá {currentUser.nickname}! Suas playlists estão aqui</h1>
                                </div>
                                <div className="list-genero">
                                    {collection.map(item => (
                                        <Link to={`/playlist/${item._id}`} title={item.descricao} key={item._id}>
                                            <Item key={item.id}>
                                                <div>
                                                    <img src={item.capa} alt={''} />
                                                    <h3>{item.nome}</h3>
                                                    <small>{item.descricao}</small>
                                                </div>
                                            </Item>
                                        </Link>
                                    ))}
                                </div>
                            </PlaylistRow>
                        </List>
                    )}
            </MainViewPlayList>
        </Container>
    );
}