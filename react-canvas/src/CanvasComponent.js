import React, { Component, Fragment } from 'react';
import { Layer, Stage } from 'react-konva';
import ListCanvas from './ListCanvas'

class CanvasComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3]
    }
    this.addFirst = this.addFirst.bind(this);
    this.addLast = this.addLast.bind(this);
  }

  randNum() {
    return Math.floor(Math.random() * 9) + 1;
  }

  addFirst() {
    this.setState({
      data: [this.randNum()].concat(this.state.data)
    })
  }

  addLast() {
    this.setState({
      data: this.state.data.concat(this.randNum())
    })
  }

  render() {
    const { data } = this.state;
    const { addFirst, addLast } = this;
    return (
      <Fragment>
        <Stage width={window.screen.width} height={400}>
          <Layer>
            <ListCanvas data={data}/>
          </Layer>
        </Stage>
        <div>
          <button onClick={addFirst}>addFirst</button>
          <button onClick={addLast}>addLast</button>
        </div>
      </Fragment>
    )
  }
}

export default CanvasComponent;