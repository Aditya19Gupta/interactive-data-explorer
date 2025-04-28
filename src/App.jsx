import React, { useEffect, useState } from 'react'
import Header from './component/Header'
import SearchBar from './component/SearchBar'
import PokemonCard from './component/PokeMonCard'

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [typesList, setTypesList] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await res.json();
        // // console.log(data)
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );
        // const pokemonDetails = data.results
        // console.log(data.results)
        // console.log(pokemonDetails)
        setPokemons(pokemonDetails);
        setFilteredPokemons(pokemonDetails);
        extractTypes(pokemonDetails);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(true);
        setLoading(false);
      }
    }
    fetchPokemons();
  }, []);

  function extractTypes(pokemonList) {
    const types = new Set();
    pokemonList.forEach((pokemon) => {
      pokemon.types.forEach((t) => types.add(t.type.name));
    });
    setTypesList(['All', ...Array.from(types)]);
  }

  useEffect(() => {
    filterPokemons();
  }, [searchTerm, typeFilter]);

  function filterPokemons() {
    let filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (typeFilter !== 'All') {
      filtered = filtered.filter((pokemon) =>
        pokemon.types.some((t) => t.type.name === typeFilter)
      );
    }
    setFilteredPokemons(filtered);
  }

  if (loading) {
    return <div className="loader">Loading Pokémon...</div>;
  }

  if (error) {
    return <div className="error">Failed to load Pokémon. Please try again later!</div>;
  }

  return (
    <div className="app-container ">
      <Header />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        typesList={typesList}
      />

      <div className="ml-5 pokemon-grid grid 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4 
              xl:grid-cols-6 
              gap-4 justify-items-center items-center">
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <div className="no-results">No Pokémon found!</div>
        )}
      </div>
    </div>
  );
}

export default App;
