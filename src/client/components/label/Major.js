import React from 'react';
import { Label } from 'semantic-ui-react';

export default class Major extends React.Component {
  getStyle() {
    return {
      marginRight: this.props.margin,
      padding: '5px 7px 5px 7px',
      marginBottom: '5px'
    }
  }

  render() {
    return (
      <Label color="yellow" style={this.getStyle()}>
        <strong>{this.props.name}</strong>
      </Label>
    );
  }
}
