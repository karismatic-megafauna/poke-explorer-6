import React, { Component } from 'react';
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
        <img src={ squirtle.sprites.front_shiny } alt={squirtle.name}/>
      </div>
    );
  }
}

export default App;
