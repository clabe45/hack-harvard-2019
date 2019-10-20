import React from 'react';
import { Link } from 'react-router-dom';
import { Message, Table, Image } from 'semantic-ui-react';

import logo from './assets/logo.svg';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Message color="green" style={{ borderRadius: 0 }}>
          Thanks for signing up to DevNet! Start your network by finding other devs or finding projects to work on.
        </Message>
      </div>
    );
  }
}
