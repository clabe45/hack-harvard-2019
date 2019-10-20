import React from 'react';
import { Label } from 'semantic-ui-react';

export default class Major extends React.Component {
  getStyle() {
    return {
      backgroundColor: '#32CD32',
      marginRight: this.props.margin,
      marginBottom: '5px'
    }
  }

  render() {
    return (
      <Label style={this.getStyle()}>
        <strong>{this.props.name}</strong>
      </Label>
    );
  }
}
