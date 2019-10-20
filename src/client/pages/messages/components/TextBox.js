import React from 'react';

export default class TextBox extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  onKeyPress(e) {
    if (e.key === 'Enter')
      this.submit();
  }

  submit() {
    this.props.sendMessage(this.state.message);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <input style={{ width: '100%' }} onKeyPress={this.onKeyPress.bind(this)} value={this.state.message} onChange={this.handleChange.bind(this)} />
    );
  }
}
