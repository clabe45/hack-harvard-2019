import React from 'react';
import io from 'socket.io-client'

import MessageList from './components/MessageList';
import TextBox from './components/TextBox';

export default class Messages extends React.Component {
  constructor() {
    super();

    const socket = io('http://localhost:4000');

    // const user = prompt('input name')
    const user = 'jim'
    socket.on('chat-message', data => {
      this.receiver(data.message, data.name)
    });

    socket.on('user-connected', name => {
      this.receiver(`${name} conneceted`, null);
    })
    socket.on('user-disconnected', name => {
      this.receiver(`${name} disconneceted`, null);
    });

    this.state = {
      socket, user, messages: []
    };
  }

  sendMessage(text) {
    this.state.socket.emit('send-chat-message', text);
    this.receiveMessage(text, this.state.user);
  }

  receiveMessage(text, user) {
    this.setState({
      messages: this.state.messages.concat({ user: this.state.user, text })
    });
  }

  render() {
    return (
      <div>
        <MessageList items={this.state.messages} user={this.state.user}/>
        <TextBox sendMessage={this.sendMessage.bind(this)} />
      </div>
    );
  }
}
