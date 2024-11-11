import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div className="Character-Card">
      <img src={character.images.md} alt={character.name} />
      <h1>{character.name}</h1>
    </div>
  );
};

export default CharacterCard;
