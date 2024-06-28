import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to Bible Puzzle Quest</h1>
        <p>Engage with the Word of God through fun and challenging puzzles and games.</p>
      </header>
      <div className="home-links">
        <Link to="/cross-puzzle" className="home-link">Crossword Puzzle</Link>
        <Link to="/daily-puzzle" className="home-link">Daily Puzzle</Link>
        <Link to="/memory-game" className="home-link">Memory Game</Link>
        <Link to="/bible-trivia" className="home-link">Bible Trivia</Link>
        <Link to="/crossword" className="home-link">Crossword</Link>
        <Link to="/word-search" className="home-link">Word Search</Link>
      </div>
    </div>
  );
};

export default Home;
