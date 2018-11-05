import React, { Component, Fragment } from 'react';
import { Rect, Text, Arrow } from 'react-konva';
import Edge from './Edge';

const SIZE = 30;

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, color='black', index } = this.props;
    const x = index * SIZE * 2;
    const y = 1 * SIZE;
    return (
      <Fragment>
        <Rect
          x={x} y={y} width={SIZE} height={SIZE}
          cornerRadius={5}
          stroke={color}
          strokeWidth={SIZE / 10}
        />
        <Text x={x + SIZE / 4} y={y + SIZE / 15} text={data} fontSize={SIZE}/>
        <Edge args={{...this.state, x, y, SIZE}}/>
      </Fragment>
    )
  }
}

export default ListItem;