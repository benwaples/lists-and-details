/* eslint-disable max-len */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchCharacters } from '../services/fetch-calls';
import styles from '../App.css';

export default class ListOfCharacters extends Component {

  state = {
    characters: []
  }

  componentDidMount = () => {
    fetchCharacters()
      .then(characters => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;
    const characterElements = characters.map(character => (
      <li key={character._id}>
        <h1>{character.name}</h1>
        <p className={styles.affiliation}><b>Affiliation</b>: {character.affiliation}</p>
        <Link to={`/detail/${character._id}`} >
          <img src={character.photoUrl} alt={character.name}/>
        </Link>
        <p>Click the image for more info</p>
      </li>
    ));
    return (
      <div id={styles.characterContainer}>
        <h1>List of Characters</h1>
        <ul id={styles.characterList}>
          {characterElements}
        </ul>
      </div>
    );
  }
}
