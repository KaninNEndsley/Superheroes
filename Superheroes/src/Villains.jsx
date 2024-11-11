import React from 'react';
import CharacterCard from './assets/CharacterCard'; 

const Villains = ({ characterList }) => {
 
  const villains = characterList.filter(hero => hero.biography.alignment === 'bad');

  return (
    <div>
      <h2>Villains</h2>
      <div className="character-grid">
        {villains.length > 0 ? (
          villains.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <p>No villains found</p>
        )}
      </div>
    </div>
  );
};

export default Villains;
