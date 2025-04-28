import React from 'react';

function SearchBar({ searchTerm, setSearchTerm, typeFilter, setTypeFilter, typesList }) {
  return (
    <div >
      <input 
        className='w-96 h-11 m-12 p-3 shadow-md shadow-slate-500 rounded-md'
        type="text" 
        placeholder="Search Pokémon..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className='w-36 h-11 shadow-md shadow-slate-500 rounded-md p-3'
       value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
        {typesList.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;
