import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <Link className="homeButton" to="/">Home</Link>
        <h1>Avatar Character Info</h1>
      </nav>
    );
  }
}
