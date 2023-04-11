'use client';

import { useTransition } from "react";

const Square = ({ value, onSquareClick }) => {
  return <button className="w-1/3 border-r-2 h-full p-0 text-xl" onClick={onSquareClick}>{value}</button>;
};

const Board = ({squares, gameWinner}) => {
  const [isPending, startTransition] =  useTransition();
  const renderSquare = (i) => {
    return <Square value={squares[i]} onSquareClick={() => {
      if (!squares[i]) {
        startTransition(() => {
          squares[i] = 'X';
          // @ts-expect-error Property 'router' does not exist on type 'Window & typeof globalThis'.
          window.router.navigate(`?squares=${squares.join(',')}`);
        });
      }
      
    }} />;
  };

  return (
    <div className="m-3 relative w-96">
      {!isPending && !gameWinner && <p className="w-96 text-center mb-3">Your turn (you are X)</p>}
      <div className="flex w-96 h-14 border-l-2 border-t-2 border-b-0 border-gray-300">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="flex w-96 h-14 border-l-2 border-t-2 border-b-0 border-gray-300">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="flex w-96 h-14 border-l-2 border-t-2 border-b-2 border-gray-300">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      {(isPending || gameWinner) && <div className="absolute w-full h-full bg-gray-500 top-0 left-0 bg-opacity-50 flex justify-center">
        {isPending && <p className="text-white mt-11">Servers turn...</p>}
        {gameWinner && <p className="text-white mt-11">{gameWinner === 'D' ? 'Draw' : `${gameWinner} wins`}</p>}
        </div>}
    </div>
  );
}

export default Board;