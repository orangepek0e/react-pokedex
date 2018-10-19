import React from 'react';
import './styles/DetailView.css';

const DetailView = ({pokemon}) => {
  return (
    <section className="details">
      <img className='sprite-image' src={ pokemon.sprite } />
      <div className='data-wrapper'>
        <h1 className='data-name'>{ pokemon.name ? pokemon.name : 'Select a Pokémon to learn more about it!' }</h1>
        <p className="data-char"> { (pokemon.type) ? `Type: ${pokemon.type}` : '' } </p>
      </div>
    </section>
  );
}

export default DetailView;