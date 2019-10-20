import React from 'react';
import { Image } from 'semantic-ui-react';

import logo from './assets/logo.svg';
import Major from '../../components/label/Major'
import Skill from '../../components/label/Skill'
import Interest from '../../components/label/Interest'
import LabelArray from '../../components/label/LabelArray'

export default class User  extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        id: 2,
        name: 'Josh',
        picture: logo,
        wanted: true,
        // projectWanted: true,
        bio: 'A short india shorta delta echo that likes to eat bread.',
        skills: ['css', 'html'],
        majors: ['computer science'],
        school: 'Harvard University',
        interests: ['food', 'apple'],
        projects: 'An app that creates an interface for users.',
        location: 'Cambridge',
        url: '#'
      }
    }
  }

  render() {
    return (
      <div style={{
        fontSize: 22, textAlign: 'center', color: '#eee', backgroundColor: '#333',
        marginLeft: '20%', marginRight: '20%', marginTop: '3%', paddingBottom: '35px'
        }}>

        <Image src={this.state.user.picture} style={{margin: 'auto'}} size="large"/>
        <h1 style={{fontSize: 44}}>{this.state.user.name}</h1>
        <p style={{fontSize: 15}}>
          goes to {this.state.user.school} in {this.state.user.location}
        </p>
        <em>{this.state.user.bio}</em>
        <p style={{marginTop: 30, fontSize: 24, color: '#888'}}>
          <LabelArray component={Major} labels={this.state.user.majors}/><br/>
          <LabelArray component={Skill} labels={this.state.user.skills}/><br/>
          <LabelArray component={Interest} labels={this.state.user.interests}/>
        </p>
      </div>
    );
  }
}
