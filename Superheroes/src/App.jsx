import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './assets/Navigation';
import Heroes from './Heroes';  // Import Heroes component
import Villains from './Villains';  // Import Villains component
import CharacterCard from './assets/CharacterCard'; // Import CharacterCard component

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch all characters once
  useEffect(() => {
    fetch('https://akabab.github.io/superhero-api/api/all.json')
      .then((res) => res.json())
      .then((data) => setCharacterList(data))  // Store all characters
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredCharacters = characterList.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!characterList.length) {
    return <h2>Loading...</h2>;
  }

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <div>
                <h2>Superheroes & Villains</h2>
                {/* Search Bar */}
                <input
                  type="text"
                  placeholder="Search for a character..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-bar"
                />
                <div className="character-grid">
                  {filteredCharacters.length > 0 ? (
                    filteredCharacters.map((character) => (
                      <CharacterCard key={character.id} character={character} />
                    ))
                  ) : (
                    <p>No characters found</p>
                  )}
                </div>
              </div>
            }
          />

          {/* Heroes route */}
          <Route
            path="/heroes"
            element={<Heroes characterList={characterList} />}
          />
          
          {/* Villains route */}
          <Route
            path="/villains"
            element={<Villains characterList={characterList} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
