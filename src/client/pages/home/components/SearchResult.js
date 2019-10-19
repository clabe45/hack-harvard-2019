import React from 'react';
import { Grid, Image, Segment, Divider } from 'semantic-ui-react'
import Skill from '../../../components/Skill'
import Interest from '../../../components/Interest'

export default class SearchResult extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width="2">
            <Image size="medium" alt="" src={this.props.picture} />
          </Grid.Column>
          <Grid.Column width="14">
            <h3>{this.props.name}</h3>
            <p>
              {this.props.skills.map((skill, i) => <Skill id={i} name={skill} />)}<br/>
              {this.props.interests.map((interest, i) => <Interest id={i} name={interest} />)}
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
