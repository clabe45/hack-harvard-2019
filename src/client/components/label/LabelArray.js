import React from 'react'

export default class LabelArray extends React.Component {
  render() {
    return (
      <div>
        [ {this.props.labels
          .map((major, i) => [React.createElement(this.props.component, {
            key: i,
            name: major,
            margin: '3px'
          }), (i<this.props.labels.length-1 ? ', ' : '')])
          .flat()
        } ]
      </div>
    );
  }
}
