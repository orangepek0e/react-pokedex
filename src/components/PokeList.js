import React from 'react';
import './styles/PokeList.css';
import PokeCell from './PokeCell';
import pokeClasses from '../pokeClasses';

const PokeList = ({ handleOnClick }) => {
  const cells = pokeClasses.map(pokeClass => {
    return (
      <PokeCell pokeClass={pokeClass} key={pokeClass.id} handleOnClick={handleOnClick} />
    )
  });

  return (
    <section className="list">
      {cells}
    </section>
  );
}

export default PokeList;