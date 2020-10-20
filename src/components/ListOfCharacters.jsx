import React, { Component } from 'react';

export default class ListOfCharacters extends Component {

  state = {
    characters: []
  }

  componentDidMount = () => {
    fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
      .then(res => res.json())
      .then(characters => this.setState({ characters }));
  }

  handleClick = ({ target }) => {
    
  }

  render() {
    const { characters } = this.state;
    const characterElements = characters.map(character => (
      <li key={character._id}>
        <h1>{character.name}</h1>
        <p>{character.affiliation}</p>
        <img src={character.photoUrl} alt={character.name}/>
        <p onClick={this.handleClick}>see more</p>
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
