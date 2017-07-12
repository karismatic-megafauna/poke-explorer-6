import React, { Component } from 'react';
import './App.css';
import pokemonMetadata from 'pokemon-metadata';
import { Card } from 'antd';

class App extends Component {
  render() {
    const pokekeys = Object.keys(pokemonMetadata);
    return (
      <div>
        { pokekeys.map(function(element) {
          const pokemon = pokemonMetadata[element];
          return (
            <PokeCard name={pokemon.name} id={pokemon.id} imgSrc={pokemon.sprites.front_default}/>
          )
        })}

      </div>
    );
  }
}
class PokeCard extends Component {
  render() {
    const { name, id, imgSrc } = this.props;
    return (
      <Card key={ id } title={ name } extra={ id } style={{ width: 300 }}>
        <img src={ imgSrc } alt={ name }/>
      </Card>
    )}
  }
  export default App;
