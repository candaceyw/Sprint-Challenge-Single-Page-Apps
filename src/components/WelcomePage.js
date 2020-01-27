import React from 'react';
import {Link} from 'react-router-dom';
import { WelcomeImage } from './styles/StyledCharacter'

export default function WelcomePage() {
  return (
    <section className='welcome-page'>
      <header>

      <WelcomeImage>
      <img 
            className='main-img'
            src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
            alt='rick'
          />
          <div>
      <h1>Welcome to the 
        <br />ultimate fan site!
        </h1>

      <div>
          <Link to='/character/' className='charactersButton'> <button>View All Characters</button></Link>
        </div>
        </div>

      </WelcomeImage>
      </header>

    </section>
  );
}
