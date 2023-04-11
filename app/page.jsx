import { Suspense } from 'react';
import Game from './Game';

/** @param {{ squares: string }} props */
export default async function ServerRoot({ squares }) {
	return (
		<>
			<h1 className="m-3 text-blue-700 text-lg">TicTacToe Game with Server Components</h1>
			<Suspense fallback={<h2>Loading...</h2>}>
				<Game squares={squares} />
			</Suspense>
		</>
	);
}

