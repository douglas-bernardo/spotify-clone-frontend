import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import NavBar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import spotify_logo from '../images/spotify_logo.png'

function Menu() {
    return(
        <Container>
        <NavBar>
            <NavBar.Brand>
                <Link to="/" style={{color: "white", textDecoration: 'none'}}>
                  <img src={spotify_logo} alt={''}/>
                </Link>
            </NavBar.Brand>
            <NavBar.Brand style={{color: 'white', marginLeft: 'auto'}}>
                <Link to="/playlists" style={{color: "white", textDecoration: 'none', marginLeft: '10px' }}> Playlists </Link>
                <Link to="/inscrever" style={{color: "white", textDecoration: 'none',  marginLeft: '10px' }}> Inscreva-se </Link>
                <Link to="/ajuda" style={{color: "white", textDecoration: 'none',  marginLeft: '10px' }}> Ajuda </Link>
            </NavBar.Brand>
        </NavBar>
        </Container>
    )
}

export default Menu