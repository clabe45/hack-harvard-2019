import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Segment, Image, Grid, Menu } from 'semantic-ui-react';

// import logo from './logo.svg';
// import Home from './client/pages/home/Home';
import './App.css';
// import uuid from 'uuid';
import Home from './client/pages/home/Home';
import Users from './client/pages/users/Users';
import User from './client/pages/user/User';
import Projects from './client/pages/projects/Projects';
import favicon from './client/assets/favicon.png';

class App extends Component {
  render() {
    return (
      <Router className="App" style={{ height: '100%' }}>
        <Grid>
          <Menu style={{ backgroundColor: '#fffd', width: '100%' }} fixed="top">
            <Menu.Item style={{ width: '100%', padding: 4 }} header>
              <Image style={{ margin: 'auto'}} width={65} src={favicon} as={Link} to="/"></Image>
            </Menu.Item>
            <Menu.Menu position="right">
            </Menu.Menu>
          </Menu>
        </Grid>
        <div id="sidebar" style={{
            width: '16%', height: '100%', padding: '0 0 0 30px', top: 74, backgroundColor: '#333', position: 'fixed'
          }}>
          <Menu vertical borderless text fixed="left" style={{ fontSize: 20, padding: 20, left: 10, top: 74 }}>
            <Menu.Item as={Link} to='/' style={{ padding: 15, margin: 0 }}><div style={{ color: '#6435c9'}}>Home</div></Menu.Item>
            <Menu.Item as={Link} to='/' style={{ padding: 15, margin: 0 }}><div style={{ color: 'white'}}>Messages</div></Menu.Item>
            <Menu.Item as={Link} to="/users" style={{ padding: 15, margin: 0 }}><div style={{ color: 'white'}}>Find users</div></Menu.Item>
            <Menu.Item as={Link} to='/Projects' style={{ padding: 15, margin: 0 }}><div style={{ color: 'white'}}>Find projects</div></Menu.Item>
          </Menu>
        </div>
        <div className="content" style={{
            width: '53%', height: '100%', margin: 'auto', marginTop: 150, padding: 0, overflowY: 'scroll'
          }}>
          <Route exact path="/" component={Home}/>
          <Route path="/users" component={Users} />
          <Route path="/user" component={User} />
          <Route path="/projects" component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;
