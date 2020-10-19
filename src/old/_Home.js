import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
    return (
        <>
            <Container className='text-center'>
                <Row className="ConteudoHome">
                    <Col md='12' >
                        <iframe title="exmaple frame" width="800" height="600" src="https://www.youtube.com/embed/E-wbGBc4BuY?autoplay=1" frameBorder="0" allow="autoplay" allowFullScreen></iframe>
                    </Col>
                    <Col>
                        <h4>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</h4>
                    </Col>
                </Row>
            </Container>
        </>
    )
}