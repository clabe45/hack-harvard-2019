import React from 'react';
import { Grid, Image, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types';

import Skill from '../../../components/Skill'
import Interest from '../../../components/Interest'

export default class SearchResult extends React.Component {
  constructor() {
    super();
    this.state = {
      hovered: false
    };
  }

  toggleHover() {
    this.setState({hover: !this.state.hover});
  }

  getStyle() {
		return {
      // opacity: 0.2,
      border: '1px solid #ddd',
      margin: 5,
      backgroundColor: this.state.hover ? '#fbfbfb' : 'white',
			textDecoration: this.props.person.wanted ? 'none' : 'line-through'
		}
	}
  // this.props.person.wanted ? 'rgba(0,255,0)' : 'rgba(255,0,0,0.2)'

  render() {
    const btnStyle = {
      padding: 0,
      width: 24,
      height: 24,
      opacity: 0.65,
      display: 'block'
    };

    return (
      <a href={this.props.person.url} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>
        <Grid style={this.getStyle()}>
          <Grid.Column width='1' align style={{textAlign: 'center', }}>
            <div style={{margin: 0, top: '50%', left: '50%', transform: 'translate(50%,50%)'}}>
              <Button color='green' style={btnStyle} onClick={() => this.props.unwantPerson(this.props.person.id, true)}></Button>
              <Button color='red' style={btnStyle} onClick={() => this.props.unwantPerson(this.props.person.id, false)}></Button>
            </div>
          </Grid.Column>
          <Grid.Column width='1'>
            <Image circular size='small' alt='' src={this.props.person.picture} style={{height: '100%'}} />
          </Grid.Column>
          <Grid.Column width='14'>
            <span style={{fontSize: 22}}>{this.props.person.name}</span><span style={{marginRight: 10}}>&nbsp;</span>
            <span style={{color: 'grey'}}>{this.props.person.bio}</span>
            <br/>
            <span>
              {this.props.person.skills.map((skill, i) => <Skill key={i} name={skill} />)}<br style={{marginBottom: 3}}/>
              {this.props.person.interests.map((interest, i) => <Interest key={i} name={interest} />)}
            </span>
          </Grid.Column>
        </Grid>
      </a>
    );
  }
}
