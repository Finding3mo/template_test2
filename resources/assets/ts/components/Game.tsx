import React, { useEffect, useState } from "react";
import { calculateWinner } from "../lib/gameLogic";
import Board from "./Board";

type History = { squares: (string | null)[] }[];

const Game = () => {
  const [history, setHistory] = useState<History>([
    { squares: Array(9).fill(null) },
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const currentBoard = history[stepNumber];
  const winner = calculateWinner(currentBoard.squares);
  const status = winner
    ? "勝者: " + winner
    : "次のプレイヤー: " + (xIsNext ? "X" : "O");

  const moves = history.map((step, move) => {
    const desc = move ? move + " 手目に戻る" : "ゲームスタート時へ";
    return (
      <li key={move}>
        <button className="moving-button" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const handleClick = (i: number) => {
    if (winner || currentBoard.squares[i]) {
      return;
    }
    const updatedSquares = currentBoard.squares.slice();
    updatedSquares[i] = xIsNext ? "X" : "O";
    const correctHistory = history.slice(0, stepNumber + 1);

    setHistory([...correctHistory, { squares: updatedSquares }]);
    setStepNumber(correctHistory.length);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentBoard.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <ul>{moves}</ul>
      </div>
    </div>
  );
};

export default Game;
