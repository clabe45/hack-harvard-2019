import React from 'react';
import { Label } from 'semantic-ui-react';

export default class Interest extends React.Component {
  getStyle() {
    return {
      marginRight: this.props.margin,
      padding: '5px 7px 5px 7px',
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
