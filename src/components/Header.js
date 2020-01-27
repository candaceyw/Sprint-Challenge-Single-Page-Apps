import React from 'react';
import { Link } from 'react-router-dom'
import { StyledHeader } from './styles/StyledCharacter';

export default function Header() {
  return (
    <StyledHeader>
      <Link to='/'> <div className='home-button'><i className='fas fa-home'></i></div></Link>
        <h1 className='ui center'>Rick &amp; Morty Fan Page</h1>
    </StyledHeader>
  );
}
