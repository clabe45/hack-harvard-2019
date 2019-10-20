import React from 'react';
import { Grid, Image, Button, Icon } from 'semantic-ui-react'

import Major from '../../../components/label/Major'
import Skill from '../../../components/label/Skill'
import Interest from '../../../components/label/Interest'
import UserLink from '../../../components/UserLink'
import LabelArray from '../../../components/label/LabelArray'

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
      alignItems: 'center',
      // opacity: 0.2,
      border: '1px solid #888',
      margin: 14,
      height: '110px',
      // backgroundColor: this.state.hover ? '#ffffff08' : 'transparent',
			textDecoration: this.props.project.wanted ? 'none' : 'line-through'
		}
	}
  // this.props.project.wanted ? 'rgba(0,255,0)' : 'rgba(255,0,0,0.2)'

  render() {
    const btnStyle = {
      padding: 0,
      width: '100%',
      height: '50%',
      opacity: 0.7,
      display: 'block',
      borderRadius: 0
    };

    return (
      <Grid style={this.getStyle()} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>
        <Grid.Column width='1' align style={{ padding: 0, height: '100%' }}>
          <Button color='green' style={btnStyle} onClick={() => this.props.unwantProject(this.props.project.id, true)}><Icon name='check'></Icon></Button>
          <Button color='red' style={btnStyle} onClick={() => this.props.unwantProject(this.props.project.id, false)}><Icon name='close'></Icon></Button>
        </Grid.Column>

        <Grid.Column offset='1' width='2' style={{ padding: '3px 10px 3px 10px' }}>
          <a href={this.props.project.url}>
            <Image circular size='tiny' alt='' src={this.props.project.picture} />
          </a>
        </Grid.Column>

        <Grid.Column width='8' style={{ lineHeight: 1.5, padding: '3px 10px 3px 10px' }}>
          <a href={this.props.project.url} style={{fontSize: 22}}>
            {this.props.project.name}
          </a><span style={{marginRight: 10}}>&nbsp;</span>
          <span style={{color: '#bfbfbf'}}>{this.props.project.description}</span>
          <div>
            {this.props.project.users
              .map((name, i) => [<UserLink name={name}/>, (i<this.props.project.users.length-1 ? ', ' : '')])
              .flat()
            }
          </div>
        </Grid.Column>

        <Grid.Column width='5' textAlign="right" style={{fontSize: 10, padding: '3px 10px 3px 10px'}}>
          <strong style={{ color: '#e74c3c' }}>&nbsp;SKILLS WANTED:</strong> <LabelArray component={Skill} labels={this.props.project.missingSkills}/><br/>
          <LabelArray component={Interest} labels={this.props.project.topics}/>
        </Grid.Column>
      </Grid>
    );
  }
}
