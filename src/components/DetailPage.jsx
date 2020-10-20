import React, { Component } from 'react';

export default class DetailPage extends Component {

  state = {
    details: {}
  }

  componentDidMount = () => {
    // eslint-disable-next-line max-len
    fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${this.props.match.params.characterId}`)
      .then(res => res.json())
      .then(details => this.setState({ details }));
  }

  render() {
    const { details } = this.state;
    return (
      <div>
        {details.name}
      </div>
    );
  }
}
