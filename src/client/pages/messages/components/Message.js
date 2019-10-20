import React from 'react';
import { Message as Message_ } from 'semantic-ui-react';

export default class Message extends React.Component {
  constructor() {
    super();
  }

  getStyle() {
    return {
      backgroundColor: this.props.me ? '#6435c9' : 'white',
      marginLeft: '50%',
      marginRight: '2%'
    };
  }

  render() {
    return <Message_ class="ui padded" style={this.getStyle()}>{this.props.text}</Message_>;
  }
}
