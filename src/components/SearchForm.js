import React from 'react';
import { SearchBar } from './styles/StyledCharacter';

export default function SearchForm({ search, handleChange }) {

  return (
    <SearchBar>
        <form  className='search-form'>
          <input className='search-bar' type='text' value={search} onChange={handleChange} placeholder='Search By Character Name' />
          <button className='search-button' type='submit'>Reset</button>
      </form>
    </SearchBar>
  );
}


