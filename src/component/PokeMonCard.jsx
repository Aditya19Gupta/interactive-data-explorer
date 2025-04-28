import React from 'react';

function PokemonCard({ pokemon }) {
   
  return (
    <div className="pokemon-card shadow-violet-500 shadow-md w-fit p-7 rounded-3xl ">
      <img  
        className='border-violet-700 border-2 rounded-2xl'
        src={pokemon.sprites.front_default} 
        alt={pokemon.name} 
      />
      <h3>#{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <div className="types">
        {pokemon.types.map((typeObj) => (
          <span key={typeObj.type.name} className={`type ${typeObj.type.name}`}>
            {typeObj.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
