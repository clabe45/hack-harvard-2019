import React from 'react';
import { Grid, Image, Segment, Divider, Checkbox, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types';

import Skill from '../../../components/Skill'
import Interest from '../../../components/Interest'

export default class SearchResult extends React.Component {
  getStyle = () => {
		return {
			textDecoration: this.props.person.wanted ?
				'none' : 'line-through'
		}
	}

  render() {
    return (
      <Grid style={this.getStyle()}>
        <Grid.Row>
          <Grid.Column width="1">
            <Button color="green" onClick={() => this.props.unwantPerson(this.props.person.id, true)}></Button>
            <Button color="red" onClick={() => this.props.unwantPerson(this.props.person.id, false)}></Button>
          </Grid.Column>
          <Grid.Column width="1">
            <Image size="small" alt="" src={this.props.person.picture} />
          </Grid.Column>
          <Grid.Column width="14">
            <h3>{this.props.person.name}</h3>
            <p>
              {this.props.person.skills.map((skill, i) => <Skill id={i} name={skill} />)}<br/>
              {this.props.person.interests.map((interest, i) => <Interest id={i} name={interest} />)}
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="16">
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
