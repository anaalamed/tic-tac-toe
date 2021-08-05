import Game from '../models/game';
import { Types } from 'mongoose';

function getRandomCode() {
	return parseInt(Math.random().toString().substring(2)).toString().substring(0, 6);
}

export function createGameFromPlayer(playerName): Promise<any> {
	// store a new game at the database
	// return game object

	const game = new Game({
		code: getRandomCode(),
		playerA: {
			identifier: Types.ObjectId(),
			name: playerName,
			wins: 0
		}
	});

	return game.save();
}



export async function getGameByCode(code) {
	const game = await Game.findOne({ code });
	return game;
}

