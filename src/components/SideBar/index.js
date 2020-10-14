import React from 'react';

import { Link } from 'react-router-dom';

import { Aside, 
         SideMenu, 
         IconHome,
         IconSearch,
         IconLibrary } from './styles';

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
                Sua Biblioteca
            </li>
        </SideMenu>
    </Aside>
  );
}

export default SideBar;