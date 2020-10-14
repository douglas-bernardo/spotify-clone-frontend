import React, { Component } from 'react';
import api from '../../services/api';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container as ContainerBootstrap, Table} from 'react-bootstrap';

import { Container, MainViewPlayList } from '../../components/Container';
import { ContainerMain, Banner, Musics, ActionBar } from './styles';
import Icon from '../../components/Icons/play';
import SideBar from '../../components/SideBar';

export default class  Playlist extends Component {
  state = {
    playlist: {}
  }

  async componentDidMount(){
    const { match } = this.props;
    const playlist_id = match.params.id;

    const { data } = await api.get(`/playlists/${playlist_id}`);
    this.setState({
      playlist: data
    });

  }
  
  render() {

    const { playlist } = this.state;
    const { musicas } = playlist;   

    return(
      <Container>
        <SideBar/>
        <MainViewPlayList>

          <ContainerMain>

              <Banner>
                <img src={playlist.capa} alt={''}/>
                <div>
                  <h2>PLAYLIST</h2>
                  <h1>{playlist.nome}</h1>
                  <p>{playlist.descricao}</p>
                </div>
              </Banner>
              <ActionBar>

                <button>
                  <Icon/>
                </button>

              </ActionBar>
              <Musics>
                <ContainerBootstrap fluid>
                  <Table hover variant="dark" id="table-music">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>TÍTULO</th>
                        <th>ARTISTA</th>
                        <th>DURAÇÃO</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(musicas) &&
                        musicas.map(m =>(
                          <tr key={m.id}>
                            <td>{m.id}</td>
                            <td>{m.nome}</td>
                            <td>{m.cantor}</td>
                            <td>{m.duracao}</td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </ContainerBootstrap>
              </Musics>

          </ContainerMain>

        </MainViewPlayList>
      </Container>
    );
  }
}