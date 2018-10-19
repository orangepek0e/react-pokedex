import React, { Component } from 'react';
import './styles/App.css';
import Pokemon from '../Pokemon';
import PokeList from './PokeList';
import DetailView from './DetailView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);
        console.log(pokemon)
        this.setState({ pokemon })
      }).catch(err => {
        console.log('we came to catch pokemon, not errors:', err);
      })
  };

  render() {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick} />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
