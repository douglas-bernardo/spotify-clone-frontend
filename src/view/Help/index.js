import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Button, Container } from 'react-bootstrap'

import './styles.css';

function Help() {
    return (
        <>
            <Container className="ConteudoFaq text-center">
                <h1 style={{marginTop: '10%'}}>Como Podemos Ajudar ?</h1>
                <Accordion defaultActiveKey="0">

                    <Card>

                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                O que é o Spotify?
                            </Accordion.Toggle>
                        </Card.Header>

                        <Accordion.Collapse eventKey="0">

                            <Card.Body>
                                O Spotify é um serviço de streaming digital que dá acesso instantâneo a milhões de músicas, .
                                podcasts, vídeos e outros conteúdos de artistas de todo o mundo. As funções básicas são gratuitas, 
                                como a reprodução de músicas, mas você também pode fazer upgrade para o Spotify Premium. 
                            </Card.Body>
                            
                        </Accordion.Collapse>

                    </Card>

                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Como começar
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                Você pode baixar o Spotify grátis para desktop aqui ou acessar uma loja de aplicativos
                                móveis para baixar o aplicativo do Spotify no seu celular ou tablet. 
                                Se não quiser baixar o aplicativo, outra opção é acessar o nosso web player para começar a ouvir direto no seu navegador.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                Baixar o aplicativo
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                O aplicativo está disponível para download gratuito e não há nenhum custo adicional para os recursos básicos, como reprodução de música.
                                Saiba como baixar o Spotify para cada dispositivo abaixo.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
            </Container>
        </>
    )
}

export default Help