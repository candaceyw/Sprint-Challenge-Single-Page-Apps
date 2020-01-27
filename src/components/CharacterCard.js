import React from 'react';
import { CharacterInfo } from './styles/StyledCharacter';

export default function CharacterCard(props) {

// console.log(props)
return (
  <div key={props.character.name}>
    <img alt={props.character.name} src={props.character.image} />
    <CharacterInfo>
    <h2>Name: {props.character.name}</h2>
    <p>Gender: {props.character.gender}</p>
    <p>Species: {props.character.species}</p>
    <p>Status: {props.character.status}</p>
    </CharacterInfo>
  </div>  
)
}
