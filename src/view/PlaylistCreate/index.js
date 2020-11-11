import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container as ContainerBootstrap, Table, Form } from 'react-bootstrap';

import { Container, MainViewPlayList } from '../../components/Container';
import SideBar from '../../components/SideBar';

import { Panel, Banner, PanelMyMusics, PanelAvailableMusics } from './styles';
import PlaylistDefaultIcon from '../../components/Icons/PlaylistDefaultIcon'

export default function PlaylistCreate() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [searchTerm, setSearchTerm] = useState('');
    
    const [searchResults, setSearchResults] = useState([]);
    const [availableMusics, setAvailableMusics] = useState([]);
    const [selectedMusics, setSelectedMusics] = useState([]); 

    function handleSearchInput(e) {
        setSearchTerm(e.target.value);
    }

    // pegar todas as pl disponiveis (publicas)
    useEffect(() => {
        api.get('/playlists').then(response => {
            // array de resultados
            const playlists = response.data;

            const playlistFiltered = playlists.filter(p => p.owner_id === 0);

            playlistFiltered.forEach(pf => {
                pf.musicas.forEach(m => {
                    setAvailableMusics(availableMusics => [...availableMusics, m]);
                })
            })
        })
    }, [])

    useEffect(() => {
        if (searchTerm && searchTerm.length > 1) {
            if (availableMusics) {
                const results = availableMusics.filter(music =>
                    music.nome.includes(searchTerm)
                );

                setSearchResults(results);
            }
        }
    }, [searchTerm])

    function handleAddMusic(id) {
        const selected = availableMusics.filter(music => music.id === id);
        selected.forEach(sel => {
            setSelectedMusics([...selectedMusics, sel]);
            setAvailableMusics(availableMusics.filter(({ id }) => id !== sel.id));
            setSearchResults(searchResults.filter(({ id }) => id !== sel.id));
        });
    }

    function handleRemoveMusic(id){
        const selected = selectedMusics.filter(music => music.id === id);
        selected.forEach(sel => {            
            setSelectedMusics(selectedMusics.filter(({ id }) => id !== sel.id))
            setAvailableMusics([...availableMusics, sel]);
            setSearchResults([...searchResults, sel]);
        });
    }

    async function handleSubmit() {
        if (name === '') {
            alert('Informe um nome para criar uma playlist');
            return;
        }

        if (!(selectedMusics && selectedMusics.length > 0)) {
            alert('Adicione pelo menos uma música para criar uma playlist');
            return;
        }

        const user = JSON.parse(localStorage.getItem("@spotify/user"));
        
        const data = {
            owner_id: user.id,
            nome: name,
            capa: '/images/cover/default_folder.png',
            descricao: description ? description : '',
            musicas: selectedMusics
        }

        await api.post('playlists', data);

        setName('');
        setDescription('');

        alert('Cadastro realizado com sucesso!');
    }

    return (
        <Container>
            <SideBar />
            <MainViewPlayList>
                {(localStorage.getItem("@spotify/user") === null) ? (
                    <h1>Faça login para criar suas playlists!</h1>
                ) : (
                    <Panel>
                        <Banner>
                            <div className="playlistCover" >
                                <div className="icon">
                                    <PlaylistDefaultIcon />
                                </div>
                            </div>
                            <div className="formCreatePanel">
                            {console.log(name)}
                                <Form>
                                    <Form.Group controlId="playListName" autoComplete="off">
                                        <Form.Label>Nome</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={name}
                                            onChange={event => setName(event.target.value)} />
                                    </Form.Group>

                                    <Form.Group controlId="playListDescription">
                                        <Form.Label>Descrição</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            value={description}
                                            onChange={event => setDescription(event.target.value)} />
                                    </Form.Group>

                                </Form>
                            </div>
                            <button className="btnSavePlaylist" onClick={() => handleSubmit()}>
                                Salvar
                            </button>
                        </Banner>

                        <PanelMyMusics>
                            <ContainerBootstrap fluid>
                                {(selectedMusics && selectedMusics.length > 0) &&
                                    <Table hover variant="dark" id="table-music">
                                        <thead>
                                            <tr>
                                                <th>TÍTULO</th>
                                                <th>ARTISTA</th>
                                                <th>ALBUM</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedMusics.map(m => (
                                                <tr key={m.id}>
                                                    <td>{m.nome}</td>
                                                    <td>{m.cantor}</td>
                                                    <td>{m.duracao}</td>
                                                    <td><button className="addMusic" onClick={() => handleRemoveMusic(m.id)}>Remover</button></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                }
                            </ContainerBootstrap>
                        </PanelMyMusics>

                        <PanelAvailableMusics>

                            <div>
                                <h3>Busque e adicione quantas musicas quiser</h3>
                            </div>

                            <div id="searchBar">
                                <input id="inputSearch"
                                    placeholder="Busque uma musica..."
                                    maxLength={80}
                                    autoComplete="off"
                                    value={searchTerm}
                                    onChange={handleSearchInput}
                                />
                            </div>

                            {(searchTerm && searchTerm.length > 1) &&
                                <Table hover variant="dark" id="table-music" borderless>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {searchResults.map(music => (
                                            <tr key={music.id} >
                                                <td>{music.nome}</td>
                                                <td>{music.cantor}</td>
                                                <td><button className="addMusic" onClick={() => handleAddMusic(music.id)}>Adicionar</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            }

                        </PanelAvailableMusics>
                    </Panel>
                    )}
            </MainViewPlayList>
        </Container>
    );
}