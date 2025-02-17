import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // State for the board
  const [isXNext, setIsXNext] = useState(true); // State to track turns

  // Function to determine the winner
  const calculateWinner = (squares) => {
    const winningLines = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Diagonal from top-left to bottom-right
      [2, 4, 6], // Diagonal from top-right to bottom-left
    ];

    for (let line of winningLines) {
      const [a, b, c] = line; // Destructure the winning line
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]; // Return "X" or "O" as the winner
      }
    }
    return null; // No winner yet
  };

  const winner = calculateWinner(squares); // Check for a winner

  const handleClick = (index) => {
    const newSquares = squares.slice(); // Create a copy of the squares array

    // If the square is already filled or there is a winner, do nothing
    if (newSquares[index] || winner) return;

    // Set the square to "X" or "O"
    newSquares[index] = isXNext ? "X" : "O";

    setSquares(newSquares); // Update the board
    setIsXNext(!isXNext); // Switch to the next player
  };

  return (
    <div>
      <div className="status">
        {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? "X" : "O"}`}
      </div>
      <div className="board">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
