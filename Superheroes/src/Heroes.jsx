import React from 'react';
import CharacterCard from './assets/CharacterCard'; 

const Heroes = ({ characterList }) => {
  
  const heroes = characterList.filter(hero => hero.biography.alignment === 'good');

  return (
    <div>
      <h2>Heroes</h2>
      <div className="character-grid">
        {heroes.length > 0 ? (
          heroes.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <p>No heroes found</p>
        )}
      </div>
    </div>
  );
};

export default Heroes;
