import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Segment, Image, Grid } from 'semantic-ui-react';

// import logo from './logo.svg';
import Home from './client/pages/home/Home';
import './App.css';
// import uuid from 'uuid';
import User from './client/pages/user/User';
// import Projects from './client/pages/Projects';
import favicon from './client/assets/favicon.png';

class App extends Component {
  render() {
    const liStyle = {
      padding: 10
    };

    return (
      <Router>
        <div className="App">
          { /* Top image */ }
          <div className="top ui" textAlign="center">
            <a href="/"><Image style={{margin: 'auto'}} size="tiny" src={favicon}></Image></a>
          </div>
          <div className="bottom">
            <Grid>
              <Grid.Column width="2" className="sidebar" style={{marginTop: 20}}>
                <ul style={{listStyle: 'none'}}>
                  <li style={liStyle}><Link to='/'><h3>Home</h3></Link></li>
                  <li style={liStyle}><Link to='/messages'><h3>Messages</h3></Link></li>
                  <li style={liStyle}><Link to='/projects'><h3>Projects</h3></Link></li>
                </ul>
              </Grid.Column>
              <Grid.Column width="14" className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/user" component={User} />
              </Grid.Column>
            </Grid>
          </div>
          </div>
      </Router>
    );
  }
}

export default App;
