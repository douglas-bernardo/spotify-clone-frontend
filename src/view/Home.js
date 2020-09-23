import React from 'react'
import Menu from '../components/Menu'
import Rodape from '../components/Rodape'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
    return (
        <>
            <Row className='Menu'>
                <Col md='12'>
                    <Menu />
                </Col>
            </Row>
            <Row className='Rodape'>
                <Col>
                    <Rodape />
                </Col>
            </Row>
        </>
    )
}