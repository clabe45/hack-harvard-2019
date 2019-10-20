import React from 'react';

import Message from './Message';

export default class MessageList extends React.Component {
  render() {
    return (
      <ul style={{ listStyleType: 'none' }}>
        {this.props.items.map((item, i) => {
          const me = this.props.user === item.user;
          return (
            <div style={{ width: '100%', textAlign: me ? 'right' : 'left '}}>
              <Message key={i} me={me} text={item.text} />
            </div>
          );
        })}
      </ul>
    );
  }
}
