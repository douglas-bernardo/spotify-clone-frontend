import React, { Component, createRef } from 'react';
import api from '../../services/api';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container as ContainerBootstrap, Table} from 'react-bootstrap';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { Container, MainViewPlayList } from '../../components/Container';
import { ContainerMain, Banner, Musics, ActionBar } from './styles';
import SideBar from '../../components/SideBar';

export default class Playlist extends Component {
  
  state = {
    playlist: {},
    play: false,
    currentIdStream: null,
    currentStreamAudio: '',
    player: null
  }

  async componentDidMount(){
    const { match } = this.props;
    const playlist_id = match.params.id;

    const { data } = await api.get(`/playlists/${playlist_id}`);
    
    this.setState({
      playlist: data,
      player: createRef()
    });
  }

  togglePlay = (val, track) => {
    this.setState({ 
        play: !this.state.play, 
        currentIdStream: val, 
        currentStreamAudio: track 
      }, ()=>{
        this.audiofunction();
      });
  }

  audiofunction = () => {
    this.state.play ? this.state.player.current.audio.current.play() : this.state.player.current.audio.current.pause(); 
  };  
  
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
              
              <AudioPlayer
                autoPlayAfterSrcChange={false}                
                src={this.state.currentStreamAudio}
                ref={this.state.player}
              />

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
                        musicas.map((m, index) =>(
                          <tr key={m.id} onClick={() => this.togglePlay(m.id, m.url_audio)}>
                            <td>{index+1}</td>
                            <td>{m.nome}</td>
                            <td>{m.cantor}</td>
                            <td>{(this.state.play && m.id === this.state.currentIdStream) ? <span id="status_music">Reproduzindo...</span> : m.duracao}</td>  
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