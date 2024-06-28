// DailyCrossword.jsx

import React, { useState, useEffect } from 'react';
import './DailyCrossword.css';

const DailyCrossword = () => {
  const [puzzle, setPuzzle] = useState(null); // State to hold puzzle data
  const [selected, setSelected] = useState(null); // State for selected cell

  useEffect(() => {
    // Fetch daily puzzle data when component mounts
    fetchDailyPuzzle();
  }, []);

  const fetchDailyPuzzle = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/puzzles'); // Adjust API endpoint as per your backend setup
      if (!response.ok) {
        throw new Error('Failed to fetch daily puzzle');
      }
      const data = await response.json();
      console.log('Fetched puzzle data:', data); // Debugging log
      setPuzzle(data[0]); // Set the first puzzle data to state
    } catch (error) {
      console.error('Error fetching daily puzzle:', error);
      // Handle error state or retry logic
    }
  };

  const handleCellClick = (row, col) => {
    setSelected({ row, col });
  };

  // Render loading state while fetching data
  if (!puzzle) {
    return <p>Loading...</p>;
  }

  // Destructure puzzle data with default values
  const { grid = [], clues = { across: [], down: [] } } = puzzle;

  return (
    <div className="daily-crossword-container">
      <h2>Daily Crossword Puzzle</h2>
      <div className="crossword-grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="crossword-row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`crossword-cell ${cell.black ? 'black-cell' : ''}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {!cell.black && cell.number && (
                  <span className="cell-number">{cell.number}</span>
                )}
                {selected && selected.row === rowIndex && selected.col === colIndex && (
                  <input
                    type="text"
                    maxLength="1"
                    className="cell-input"
                    autoFocus
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="crossword-clues">
        <h3>Across</h3>
        <ul>
          {clues.across.map((clue, index) => (
            <li key={index}>{`${clue.number}. ${clue.clue}`}</li>
          ))}
        </ul>
        <h3>Down</h3>
        <ul>
          {clues.down.map((clue, index) => (
            <li key={index}>{`${clue.number}. ${clue.clue}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DailyCrossword;
