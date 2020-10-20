import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchCharacters } from '../services/fetch-calls';

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
        <p>{character.affiliation}</p>
        <Link to={`/detail/${character._id}`} >
          <img src={character.photoUrl} alt={character.name}/>
        </Link>
      </li>
    ));
    return (
      <div className="character-list">
        <h1> list of Characters</h1>
        <ul>
          {characterElements}
        </ul>
      </div>
    );
  }
}
