import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

import HomeComponent from './components/HomeComponent';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className='container-fluid'>
      <div className='App'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">DUCK FEED</h1>
        </header>
        <Navbar>
          <Nav>
            <NavItem eventKey={1}>
                <Link to={'/'} className='nav-link'>Home</Link>
            </NavItem>
          </Nav>
          </Navbar>
          <Switch>
              <Route exact path='/' component={HomeComponent}/>
          </Switch>
          </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
