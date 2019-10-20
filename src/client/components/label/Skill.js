import React from 'react';
import { Label } from 'semantic-ui-react';

export default class Skill extends React.Component {
  getStyle() {
    return {
      marginRight: this.props.margin,
      marginBottom: '5px'
    }
  }

  render() {
    return (
      <a>
        <Label className='red' style={this.getStyle()}>{this.props.name}</Label>
      </a>
    );
  }
}
