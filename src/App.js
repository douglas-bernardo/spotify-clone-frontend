import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container'
import Buttom from 'react-bootstrap/Button'
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path='/ajuda'>
            <Ajuda />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
