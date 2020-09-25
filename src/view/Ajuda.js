import React from 'react'
import { Accordion, Card, Button, Container } from 'react-bootstrap'
import Menu from '../components/Menu'
import Rodape from '../components/Rodape'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Ajuda() {
    return (
        <>
            <Container className="ConteudoFaq text-center">
                <h1 style={{marginTop: '10%'}}>Como Podemos Ajudar ?</h1>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Click me!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Click me!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body2222</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        </>
    )
}

export default Ajuda