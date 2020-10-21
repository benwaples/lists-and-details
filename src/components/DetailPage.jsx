/* eslint-disable max-len */
import React, { Component } from 'react';
import { fetchCharacter } from '../services/fetch-calls';
import styles from '../App.css';

export default class DetailPage extends Component {

  state = {
    details: {}
  }

  componentDidMount = () => {
    // eslint-disable-next-line max-len
    fetchCharacter(this.props.match.params.characterId)
      .then(details => this.setState({ details }));
  }

  render() {
    const { details } = this.state;
    return (
      <div className={styles.detailedCharacter}>
        <h1>{details.name}</h1>
        <img src={details?.photoUrl} alt={details.name}/>
        <p>Identified Gender: {details.gender ? details.gender : 'No identified gender'}</p>
        <p>Eye Color: {details.eye ? details.eye : 'No associated eye color'}</p>
        <p>Love: {details.love ? details.love : 'No associated love'}</p>
        <p>Weapon: {details.weapon ? details.weapon : 'No associated weapon'}</p>
        <p>Profession: {details.profession ? details.profession : 'No associated profession'}</p>
        <p>Predecessor: {details?.predecessor}</p>
      </div>
    );
  }
}
