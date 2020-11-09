import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, MainViewPlayList } from '../../components/Container';
import SideBar from '../../components/SideBar';
import api from '../../services/api';

import { List, PlaylistRow, Item } from './styles';

export default function Collection() {

    const [collection, setCollection] = useState([]);

    useEffect(() => {
        api.get('/playlists', {
            params: { owner_id: 1 }
        }).then(response => {
            setCollection(response.data);
        });
    }, []);

    return (
        <Container>
            <SideBar />
            <MainViewPlayList>

                <List className="list">
                    <PlaylistRow className="playlistrow">
                        <div className="genero">
                            <h1>Suas playlists estão aqui</h1>
                        </div>
                        <div className="list-genero">
                            {collection.map(item => (
                                <Link to={`/playlist/${item.id}`} title={item.descricao} key={item.id}>
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

            </MainViewPlayList>
        </Container>
    );
}