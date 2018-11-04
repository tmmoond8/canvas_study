import React, { Component } from 'react';
import { Layer, Stage } from 'react-konva';
import MyRect from './MyRect';
import MyShape from './MyShape';
import MyCircle from './MyCircle';

class CanvasComponent extends Component {

  render() {
    return (
      <Stage width={700} height={700}>
        <Layer>
          <MyRect/>
          <MyShape/>
          <MyCircle/>
        </Layer>
      </Stage>
    )
  }
}

export default CanvasComponent;