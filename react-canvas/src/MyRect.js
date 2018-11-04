import React, { Component } from 'react';
import Konva, { Rect, Shape } from 'react-konva';
import randomColor from 'randomcolor';

class MyRect extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      color: 'green'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.dir(Konva)
    this.setState({
      color: randomColor()
    });
  }

  render() {
    return (
      <Rect
        x={10} y={10} width={50} height={50}
        fill={this.state.color}
        shadowBlur={10}
        onClick={this.handleClick}
      />
    )
  }
}

export default MyRect;