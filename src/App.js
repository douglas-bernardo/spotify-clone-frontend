import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container'
import Buttom from 'react-bootstrap/Button'
import Menu from './components/Menu'
import Rodape from './components/Rodape'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Home from './view/Home'
import Ajuda from './view/Ajuda'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


const containerStyle = {
  paddingLeft: '0px',
  paddingRight: '0px',
  marginLeft: '0px',
  marginRight: '0px'
}

function App() {
  return (

    <Container fluid className="App" style={ containerStyle }>
      <Router>
        <Row className='Menu'>
          <Col md='12'>
            <Menu />
          </Col>
        </Row>
        <Switch>
          <Route exact path="/">
            <div className='containerDefault backgroundHome'>
              <Home />
            </div>
          </Route>
          <Route exact path='/ajuda'>
            <div className='containerDefault backgroundFaq'>
              <Ajuda />
            </div>
          </Route>
        </Switch>
        <Row className='Rodape'>
          <Col md='12'>
            <Rodape />
          </Col>
        </Row>
      </Router>
    </Container>
  );
}

export default App;
