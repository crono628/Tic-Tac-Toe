import React, { useEffect, useState } from 'react';
import Square from './Square';
import uniqid from 'uniqid';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xNext, setXNext] = useState(true);
  const [status, setStatus] = useState('');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    let winner = calculateWinner(squares);
    if (winner) {
      setStatus('Winner: ' + winner);
      setGameOver(true);
    } else if (squares.every((square) => square !== null)) {
      setStatus("It's a tie!");
      setGameOver(true);
    } else {
      setStatus('Next player: ' + (xNext ? 'X' : 'O'));
    }
  });

  const handleClick = (num) => {
    const copy = squares.slice();
    if (calculateWinner(copy) || copy[num]) {
      return;
    } else {
      copy[num] = xNext ? 'X' : 'O';
      setSquares(copy);
      setXNext(!xNext);
      calculateWinner(copy);
    }
  };

  const handleSquareRender = (num) => {
    return (
      <Square
        key={uniqid()}
        onClick={() => handleClick(num)}
        value={squares[num]}
      />
    );
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXNext(true);
    setGameOver(false);
  };

  let squaresArray = [];

  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      row.push(
        <div key={uniqid()} className={`col-${j}`}>
          {handleSquareRender(i * 3 + j)}
        </div>
      );
    }
    squaresArray.push(
      <div key={uniqid()} className={`row-${i}`}>
        {row}
      </div>
    );
  }
  return (
    <div className="game-container">
      <div className="status">{status}</div>
      <div className="board">{squaresArray}</div>
      <div className="game-over">
        {gameOver ? <button onClick={handleReset}>Reset</button> : null}
      </div>
    </div>
  );
};

function calculateWinner(squares) {
  const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < combos.length; i++) {
    const [a, b, c] = combos[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
