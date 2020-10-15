import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import spotify_logo from '../images/spotify_logo.png'

function Rodape() {
    const listaEmpresa = ["Sobre", "Empregos", "For the Record"]
    const listaComunidades = ["Para Artistas", "Desenvolvedores", "Marcas", "Investidores", "Fornecedores"]
    const listaLinksUnicos = [ "Ajuda", "Player da Web", "Aplicativo móvel grátis" ]
    const data = new Date()

    return (
        <Container className="ConteudoRodape">
            <Row>
                <Col md="3" style={{ marginTop: "18px" }}>
                    <Link to="/" style={{color: "white", textDecoration: 'none'}}>
                        <img src={spotify_logo} alt={''}/>
                    </Link>
                    {data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear()}
                </Col>
                <Col md='3' style={{ marginTop: "18px" }}>
                    <h5 style={{color: "grey"}}>Empresa</h5>
                    <ul style={{listStyle: "none", marginLeft: "-40px"}}>
                        {listaEmpresa.map( item => <li style={{padding: "5px", color:'white'}}>{item}</li> )}
                    </ul>
                </Col>
                <Col md='3' style={{ marginTop: "18px" }}>
                    <h5 style={{color: "grey"}}>Comunidades</h5>
                    <ul style={{listStyle: "none", marginLeft: "-40px"}}>
                        {listaComunidades.map( item => <li style={{padding: "5px", color:'white'}}>{item}</li> )}
                    </ul>
                </Col>
                <Col md='3' style={{ marginTop: "18px" }}>
                    <h5 style={{color: "grey"}}>Links Únicos</h5>
                    <ul style={{listStyle: "none", marginLeft: "-40px"}}>
                        {listaLinksUnicos.map( item => <li style={{padding: "5px", color:'white'}}>{item}</li> )}
                    </ul>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Rodape