import React from 'react';

function SearchBar({ searchTerm, setSearchTerm, typeFilter, setTypeFilter, typesList }) {
  return (
    <div className='sm:justify-start sm:items-start mt-2 ml-5 mb-5'>
      <input 
        className='md:w-96 mr-2  sm:w-72 sm:ml-3 sm:mt-5 h-11 md:m-12 p-3 shadow-md shadow-slate-500 rounded-md'
        type="text" 
        placeholder="Search Pokémon..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className='sm:w-10 md:w-36 h-11 shadow-md shadow-slate-500 rounded-md p-3'
       value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
        {typesList.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;
