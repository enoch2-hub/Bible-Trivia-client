
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Bible Puzzle Quest</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/daily-Crossword">Daily Crossword</Link></li>
        <li><Link to="/memory-game">Memory Game</Link></li>
        <li><Link to="/bible-trivia">Bible Trivia</Link></li>
        <li><Link to="/crossword">Crossword</Link></li>
        <li><Link to="/word-search">Word Search</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
