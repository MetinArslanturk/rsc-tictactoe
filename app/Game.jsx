import Board from './Board';

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

/** @param {{ squares: string }} props */
export default function Game({ squares }) {
	const currentSquares = squares?.split(',') || Array.from({ length: 9 }, () => null);
    if (squares) {
        for (let i = 0; i < currentSquares.length; i++) {
            if (!currentSquares[i]) {
                currentSquares[i] = 'O';
                break;
            }
        }
    }

    // D means Draw (no winner - all squares are filled)
    const gameWinner = calculateWinner(currentSquares) || (currentSquares.every(Boolean) ? 'D' : null);

	return <Board squares={currentSquares} gameWinner={gameWinner} />
}


