import React from 'react';
import { Label } from 'semantic-ui-react';

export default class Interest extends React.Component {
  render() {
    return (
      <a>
        <Label className="blue">{this.props.name}</Label>
      </a>
    );
  }
}
