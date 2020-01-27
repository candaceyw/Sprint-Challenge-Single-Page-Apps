import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';
import { StyledCharWrapper, StyledCharacter } from './styles/StyledCharacter';
import {useLocalStorage} from './hook/hooks';
import Skeleton from 'react-loading-skeleton';

export const SearchContext = React.createContext();

export default function CharacterList() {

  // const [char, setChar] = useState('');
  // const [search, setSearch] = useLocalState('character');

  const [char, setChar] = useLocalStorage('character');
  const [search, setSearch] = useState('');

  let url = `https://rickandmortyapi.com/api/character/?name=${search}`


  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setTimeout(function(){
          const name = response.data.results.filter(e =>
            e.name.toLowerCase().includes(search.toLowerCase())
          );
          setChar(name);
        }, 2500)

        })
       


      .catch(err => console.log(err));
      }, [search, setChar, url]);


    const handleChange = e => {
      e.preventDefault();
      setSearch(e.target.value);
    };

    const handleSubmit = e => {
      e.preventDefault();
    };

  
if (!char) return <h2>Loading...</h2>


  return (
    <>
    <SearchContext.Provider value={[char, setChar]}>
      <SearchForm
        placeholder='Search By Characters'
        value={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
       
      <StyledCharWrapper>
        {char.map(character => (
          <StyledCharacter key={character.id}>
            <CharacterCard 
              character={character} 
              name={character.name} 
              image={character.image}
              gender={character.gender}
              search={search}
            />
        </StyledCharacter>
        ))|| <Skeleton circle={true} height={50} width={50} count={20}/>}
       
      </StyledCharWrapper>
    </SearchContext.Provider>
  </>
  );
}



