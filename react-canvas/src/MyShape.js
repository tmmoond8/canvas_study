import React, { Component } from 'react';
import { Shape } from 'react-konva';

class MyShape extends Component {
  render() {
    return (
        <Shape fill="#00D2FF" draggable
         sceneFunc={function (ctx) {
             ctx.beginPath();
             ctx.moveTo(20, 50);
             ctx.lineTo(220, 80);
             ctx.quadraticCurveTo(150, 100, 260, 170);
             ctx.closePath();
             // Konva specific method
             ctx.fillStrokeShape(this);
         }}
     />
    )
  }
}

export default MyShape;