import React, { Component } from 'react';

export default class DetailPage extends Component {

  render() {
    const characterId = this.props.match.params.characterId;
    return (
      <div>
        {characterId}
      </div>
    );
  }
}
