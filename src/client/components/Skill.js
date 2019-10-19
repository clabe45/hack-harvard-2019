import React from 'react';
import { Label } from 'semantic-ui-react';

export default class Skill extends React.Component {
  render() {
    return (
      <a>
        <Label className='red'>{this.props.name}</Label>
      </a>
    );
  }
}
