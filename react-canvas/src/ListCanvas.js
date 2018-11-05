import React, { Component, Fragment } from 'react';
import { Rect } from 'react-konva';
import ListItem from './ListItem';

class ListCanvas extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props
    return (
      <Fragment>
        {data.map((item, index) => <ListItem data={item} index={index}/>)}
      </Fragment>
    )
  }
}

export default ListCanvas