import React from 'react';

export default class UserLink extends React.Component {
  render() {
    return <a style={{ color: '#ef1e7e' }} href="/user">{this.props.name}</a>;
  }
}
