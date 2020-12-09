import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, MainViewPlayList } from '../../components/Container';
import SideBar from '../../components/SideBar';

import { List, PlaylistRow, Item } from './styles';

export default class Playlists extends Component {

    state = {
        list: []
    }
    
    async componentDidMount(){
        const { data } = await api.get('/playlists');

        const playlistFiltered = data.filter(p => p.owner_id === null);

        this.setState({
            list: playlistFiltered
        });
    }

    render(){
        const { list } = this.state;        
        return(                   
            <Container>
            <SideBar/>
            <MainViewPlayList>
                
                <List className="list">
                    <PlaylistRow className="playlistrow">
                        <div className="genero">
                            <h1>Lendas do Rock</h1>
                        </div>
                        <div className="list-genero">
                            {list.map(item =>(
                                <Link to={`/playlist/${item._id}`} title={item.descricao} key={item._id}>
                                    <Item key={item._id}>
                                        <div>
                                            <img src={item.capa} alt={''}/>
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
}
