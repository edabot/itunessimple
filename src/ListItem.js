import React, { Component } from 'react';

class ListItem extends Component {

  render() {
    return (
      <div>
        {this.props.item.artistName} - {this.props.item.trackName}
      </div>
    )
  }
}

export default ListItem;
