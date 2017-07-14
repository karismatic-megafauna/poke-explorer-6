import React, { Component } from 'react';
import './App.css';
import pokemonMetadata from 'pokemon-metadata';
import PokeCard from './PokeCard';
import { Input } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Search = Input.Search;

const Child = ({ match }) => (
  <div>
    <h3>Name: {match.params.name}</h3>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
  }
  compareName = (pokemon) => {
    return pokemon.includes(this.state.query);
  }
  showCard = (element) => {
    const pokemon = pokemonMetadata[element];
    return (
      <Link key={ pokemon.id } to={pokemon.name}>
        <PokeCard
          name={pokemon.name}
          id={pokemon.id}
          imgSrc={pokemon.sprites.front_default}
        />
      </Link>
    )
  }

  render() {
    const pokekeys = Object.keys(pokemonMetadata);
    return (
      <Router>
        <div className = 'App'>
          <Route exact path="/" render={ () => (
            <div>
              <div className = 'header'>
                <Search
                  placeholder="input search text"
                  style={{ width: 200 }}
                  onChange={ (event) => {
                    this.setState({query: event.target.value})
                  } }
                  />
              </div>
              <div className = 'container'>
                { pokekeys
                  .filter(this.compareName)
                  .map(this.showCard)
                }
              </div>
            </div>
          )}/>
          <Route path="/:name" component={Child}/>
        </div>
      </Router>
    );
  }
}

export default App;
