import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pokemonMetadata from 'pokemon-metadata';

class App extends Component {
  render() {
    console.log(pokemonMetadata)
    const squirtle = pokemonMetadata.squirtle;
    return (
      <div>
        { squirtle.name }
        { squirtle.id }
        <img src={ squirtle.sprites.front_shiny }/>
      </div>
    );
  }
}

export default App;
