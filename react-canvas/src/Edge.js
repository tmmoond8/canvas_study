import React, { Component, Fragment } from 'react';
import { Arrow } from 'react-konva';

class Edge extends Component {
  constructor(...args) {
    super(...args);
    const { x, y, SIZE, color='black' } = args[0].args;
    this.state = {
      x,
      y,
      SIZE,
      color
    };
  }

  render() {
    const { x, y, SIZE, color } = this.state;
    const startPoint = {
      x: x + SIZE, 
      y: y + SIZE / 2
    }
    return ( 
      <Arrow
        points={[
          startPoint.x, startPoint.y, 
          startPoint.x + SIZE - 3,  startPoint.y]}
        pointerLength={3}
        pointerWidth={5}
        // pointerAtBeginning={true}
        fill={color}
        stroke={color}
        strokeWidth={SIZE / 10}
      />
    )
  }
}

export default Edge;