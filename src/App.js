import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import DailyPuzzle from './components/DailyPuzzle/DailyCrossword';
import MemoryGame from './components/MemoryGame';
import BibleTrivia from './components/BibleTrivia/BibleTrivia';
import Crossword from './components/Crossword/Crossword';
import WordSearch from './components/WordSearch';
import Navbar from './partials/Navbar/Navbar';

function App() {
  return (
    <Router>
        {/* <Navbar/> */}
      <Routes>
        <Route path="/" exact element={<Home/>} />
        {/* <Route path="/cross-puzzle" element={<Crossword/>} /> */}
        <Route path="/daily-puzzle" element={<DailyPuzzle/>} />
        <Route path="/memory-game" element={<MemoryGame/>} />
        <Route path="/bible-trivia" element={<BibleTrivia/>} />
        <Route path="/crossword" element={<Crossword/>} />
        <Route path="/word-search" element={<WordSearch/>} />
      </Routes>
    </Router>
  );
}

export default App;
