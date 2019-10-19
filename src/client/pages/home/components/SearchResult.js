import React from 'react';
import { Grid, Image, Segment, Divider, Checkbox, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types';

import Skill from '../../../components/Skill'
import Interest from '../../../components/Interest'

export default class SearchResult extends React.Component {
  getStyle() {
		return {
      // opacity: 0.2,
			textDecoration: this.props.person.wanted ? 'none' : 'line-through'
		}
	}
  // this.props.person.wanted ? 'rgba(0,255,0)' : 'rgba(255,0,0,0.2)'

  render() {
    return (
      <Grid style={this.getStyle()}>
        <Grid.Column width='1'>
          <Button circular color='green' style={{height: '50%', opacity: 0.5}} onClick={() => this.props.unwantPerson(this.props.person.id, true)}></Button>
          <Button circular color='red' style={{height: '50%', opacity: 0.5}} onClick={() => this.props.unwantPerson(this.props.person.id, false)}></Button>
        </Grid.Column>
        <Grid.Column width='1'>
          <Image circular size='small' alt='' src={this.props.person.picture} style={{height: '100%'}} />
        </Grid.Column>
        <Grid.Column width='14'>
          <p style={{fontSize: 22, marginBottom: -18}}>{this.props.person.name}</p><br/>
          <span>
            {this.props.person.skills.map((skill, i) => <Skill id={i} name={skill} />)}<br/>
            {this.props.person.interests.map((interest, i) => <Interest id={i} name={interest} />)}
          </span>
        </Grid.Column>
      </Grid>
    );
  }
}
