import React from 'react';
import { Grid, Image, Button, Icon } from 'semantic-ui-react'

import Major from '../../../components/label/Major'
import Skill from '../../../components/label/Skill'
import Interest from '../../../components/label/Interest'
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
			textDecoration: this.props.user.wanted ? 'none' : 'line-through'
		}
	}
  // this.props.user.wanted ? 'rgba(0,255,0)' : 'rgba(255,0,0,0.2)'

  render() {
    const btnStyle = {
      padding: 0,
      width: '100%',
      height: '50%',
      display: 'block',
      borderRadius: 0
    };

    return (
      <Grid style={this.getStyle()} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>
        <Grid.Column width='1' align style={{ padding: 0, height: '100%' }}>
          <Button color='green' style={btnStyle} onClick={() => {}}><Icon name='check'></Icon></Button>
          <Button color='red' style={btnStyle} onClick={() => this.props.unwantPerson(this.props.user.id, false)}><Icon name='close'></Icon></Button>
        </Grid.Column>

        <Grid.Column offset='1' width='2' style={{ padding: '3px 10px 3px 10px' }}>
          <a href={this.props.user.url}>
            <Image circular size='tiny' alt='' src={this.props.user.picture} />
          </a>
        </Grid.Column>

        <Grid.Column width='8' style={{ lineHeight: 1.5, padding: '3px 10px 3px 10px' }}>
          <a href={this.props.user.url} style={{fontSize: 22}}>
            {this.props.user.name}
          </a><span style={{marginRight: 10}}>&nbsp;</span>
          <span style={{color: '#bfbfbf'}}>{this.props.user.bio}</span>
        </Grid.Column>

        <Grid.Column width='5' textAlign="right" style={{fontSize: 10, padding: '3px 10px 3px 10px'}}>
          <LabelArray component={Major} labels={this.props.user.majors}/><br/>
          <LabelArray component={Skill} labels={this.props.user.skills}/><br/>
          <LabelArray component={Interest} labels={this.props.user.interests}/>
        </Grid.Column>
      </Grid>
    );
  }
}
