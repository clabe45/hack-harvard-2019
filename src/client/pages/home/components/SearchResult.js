import React from 'react';
import { Grid, Image, Button, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types';

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
      // opacity: 0.2,
      border: '1px solid #ddd',
      margin: 5,
      backgroundColor: this.state.hover ? '#fbfbfb' : 'white',
			textDecoration: this.props.user.wanted ? 'none' : 'line-through'
		}
	}
  // this.props.user.wanted ? 'rgba(0,255,0)' : 'rgba(255,0,0,0.2)'

  render() {
    const btnStyle = {
      padding: 0,
      width: 24,
      height: 24,
      opacity: 0.82,
      display: 'block'
    };

    return (
      <a href={this.props.user.url} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>
        <Grid style={this.getStyle()}>
          <Grid.Column width='1' align style={{textAlign: 'center', }}>
            <div style={{margin: 0, top: '50%', left: '50%', transform: 'translate(50%,50%)'}}>
              <Button circular color='green' style={btnStyle} onClick={() => this.props.unwantPerson(this.props.user.id, true)}><Icon name='check'></Icon></Button>
              <Button circular color='red' style={btnStyle} onClick={() => this.props.unwantPerson(this.props.user.id, false)}><Icon name='close'></Icon></Button>
            </div>
          </Grid.Column>
          <Grid.Column width='1'>
            <Image circular size='small' alt='' src={this.props.user.picture} style={{height: '100%'}} />
          </Grid.Column>
          <Grid.Column width='14'>
            <span style={{fontSize: 22}}>{this.props.user.name}</span><span style={{marginRight: 10}}>&nbsp;</span>
            <span style={{color: 'grey'}}>{this.props.user.bio}</span>
            <br/>
            <span style={{fontSize: 10}}>
              <LabelArray component={Major} labels={this.props.user.majors}/>
              <LabelArray component={Skill} labels={this.props.user.skills}/>
              <LabelArray component={Interest} labels={this.props.user.interests}/>
            </span>
          </Grid.Column>
        </Grid>
      </a>
    );
  }
}
