import React from 'react';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import spotify_logo from '../../images/spotify_logo.png'
import { ContainerFooter, NavFooter } from './styles';

function Footer() {
    const data = new Date()
    return(
        <ContainerFooter>
            <footer>
                <NavFooter>

                    <div className="navBrand">
                        <img src={spotify_logo} alt={''}/>
                        <small>
                        {data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear()}               
                        </small>
                    </div>

                    <div className="topLinks">

                        <div className="empresaLinks">
                            <ul>
                                <li>EMPRESA</li>
                                <li><a href="/">Sobre</a></li>
                                <li><a href="/">Empregos</a></li>
                                <li><a href="/">For the Record</a></li>
                            </ul>
                        </div>

                        <div className="comunidadeLinks">
                            <ul>
                                <li>COMUNIDADES</li>
                                <li><a href="/">Para Artistas</a></li>
                                <li><a href="/">Desenvolvedores</a></li>
                                <li><a href="/">Investidores</a></li>
                                <li><a href="/">Fornecedores</a></li>
                            </ul>
                        </div>

                        <div className="uteisLinks">
                            <ul>
                                <li>LINKS ÚTEIS</li>
                                <li><a href="/">Ajuda</a></li>
                                <li><a href="/">Player da Web</a></li>
                                <li><a href="/">Aplicativo móvel grátis</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="socialIcons">
                        <ul>
                            <li>
                                <a href="/">
                                   <span> <FaFacebookF size={24}/> </span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                   <span> <FaTwitter size={24}/> </span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                   <span> <FaInstagram size={24}/> </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </NavFooter>
            </footer>
        </ContainerFooter>
    );
}

export default Footer;