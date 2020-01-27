import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';
import { StyledCharWrapper, StyledCharacter } from './styles/StyledCharacter';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState("")
  const [search, setSearch] = useState("");

  let url = `https://rickandmortyapi.com/api/character/?name=${search}`
  
  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        const name= res.data.results.filter(e =>
          e.name.toLowerCase().includes(search.toLowerCase())
        );
        setChar(name);
      })
      .catch(err => console.log(err));
        }, [search, setChar, url]);

  return (
    <section className="character-list">
      {char.map(character => (
        <CharacterCard />
      ))}
    </section>
  );
}
