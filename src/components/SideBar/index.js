import React from 'react';

import { Link } from 'react-router-dom';

import { Aside, 
         SideMenu, 
         IconHome,
         IconLibrary,
         IconSearch } from './styles';

import LogoCreatePlaylist from '../../components/Icons/LogoCreatePlaylist';

function SideBar() {
  return (
    <Aside>
        <SideMenu>
            <li>
                <IconHome/>
                <Link to="/playlists">                    
                    Inicio
                </Link>
            </li>
            <li>
                <IconSearch/>
                Buscar
            </li>
            <li>
                <IconLibrary/>
                <Link to="/collection">
                    Sua Biblioteca
                </Link>                
            </li>
            <li>
                <LogoCreatePlaylist/>
                <Link to="/playlist/create">
                    Criar Playlist
                </Link>
            </li>

        </SideMenu>
    </Aside>
  );
}

export default SideBar;