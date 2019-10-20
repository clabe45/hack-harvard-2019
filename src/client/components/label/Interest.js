import React from 'react';
import { Label } from 'semantic-ui-react';

export default class Interest extends React.Component {
  getStyle() {
    return {
      marginRight: this.props.margin,
      marginBottom: '5px'
    }
  }

  render() {
    return (
      <a>
        <Label className='blue' style={this.getStyle()}>{this.props.name}</Label>
      </a>
    );
  }
}
