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
      <div className="detailedCharacter">
        <h1>{details.name}</h1>
        <img src={details?.photoUrl} alt={details.name}/>
        <p>Identified Gender: {details?.gender}</p>
        <p>Eye Color: {details?.eye}</p>
        <p>Love: {details?.love}</p>
        <p>Weapon: {details?.weapon}</p>
        <p>Profession: {details?.profession}</p>
        <p>Predecessor: {details?.predecessor}</p>
      </div>
    );
  }
}
