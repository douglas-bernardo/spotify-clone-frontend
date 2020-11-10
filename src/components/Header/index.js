import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import spotify_logo from '../../images/spotify_logo.png'
import { HeaderMenu, Nav } from './styles';

function Header ({user, logout}){
    return(
        <HeaderMenu>            
            <div className="headerContainer">

                <div className="headerBrand">
                    <Link to="/">
                        <img src={spotify_logo} alt={''}/>
                    </Link>
                </div>

                <Nav>
                    <ul>
                        <li><Link to="/playlists">Playlists</Link></li>                       
                        <li><Link to="/help">Ajuda</Link></li>
                        <li className="separator">|</li>
                        {user ? <li><Link to="/" onClick={() => logout('')}>Logout</Link></li> : <><li><Link to="/signup">Inscreva-se</Link></li>
                            <li><Link to="/signin">Login</Link></li> </>}                 
                    </ul>
                </Nav>

            </div>
        </HeaderMenu>
    );
} 

export default Header;