import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import axios from 'axios';

import HomeComponent from './components/HomeComponent';
import SigninComponent from './components/SigninComponent';
import SignoutComponent from './components/SignoutComponent';
import SignupComponent from './components/SignupComponent';


import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    axios.defaults.withCredentials = true;
  }

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

          <Nav>
              <NavItem eventKey={2}>
                  <Link to={'/feed/add'} className='nav-link'>Add Feed</Link>
              </NavItem>
          </Nav>
          <Nav>
              <NavItem eventKey={3}>
                  <Link to={'/schedule/add'} className='nav-link'>Add Schedule</Link>
              </NavItem>
          </Nav>
          <Nav>
              <NavItem eventKey={4}>
                  <Link to={'/food/add'} className='nav-link'>Add Food</Link>
              </NavItem>
          </Nav>
          <Nav>
              <NavItem eventKey={5}>
                <Link to={'/foodtype/add'} className='nav-link'> Add Food Type</Link>
              </NavItem>
          </Nav>

          <Nav pullRight>
              <NavItem eventKey={6}>
                  <Link to={'/user/signin'} className='nav-link'>Sign In</Link>
              </NavItem>
          </Nav>
          <Nav pullRight>
              <NavItem eventKey={7}>
                  <Link to={'/user/signout'} className='nav-link'>Sign Out</Link>
              </NavItem>
          </Nav>
          <Nav pullRight>
              <NavItem eventKey={8}>
                  <Link to={'/user/signup'} className='nav-link'>Sign Up</Link>
              </NavItem>
          </Nav>
          </Navbar>
          <Switch>
              <Route exact path='/' component={HomeComponent}/>
              <Route exact path='/feed/add' component={HomeComponent}/>
              <Route exact path='/schedule/add' component={HomeComponent}/>
              <Route exact path='/food/add' component={HomeComponent}/>
              <Route exact path='/foodtype/add' component={HomeComponent}/>
              <Route exact path='/user/signin' component={SigninComponent}/>
              <Route exact path='/user/signout' component={SignoutComponent}/>
              <Route exact path='/user/signup' component={SignupComponent}/>
          </Switch>
          </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
