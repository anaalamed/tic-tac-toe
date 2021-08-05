import { Types } from 'mongoose';
import Game from '../models/game';
import { getGameByCode } from '../services/game-service';

export default async function startGame(req, res) {
	const { playerName, code } = req.body || {};
	const identifier = (req.headers.user);

	if (identifier) {
		const game = await getNewGameForPlayerA(JSON.parse(identifier));
		res.json(game);
	}
	else if (playerName && code) {
		const game = await getNewGameForPlayerB(playerName, code);
		res.json(game);
	} else {
		return res.status(400).send({ message: 'you should fill the game code and your name' });
	}
}

async function getNewGameForPlayerA(identifier) {
	const game = await Game.findOne({ "playerA.identifier": identifier });
	return game;
}

async function getNewGameForPlayerB(playerName, code) {
	var game = await getGameByCode(code);
	console.log('1', game);

	game.xSign = null;
	game.playerB = {
		identifier: Types.ObjectId(),
		name: playerName,
		wins: 0
	};
	game.currentTurn = null;
	game.board = [['', '', ''], ['', '', ''], ['', '', '']];

	// if (game.playerB) {
	// 	throw new Error('this game is already full');
	// };
	await game.save();
	return game;
}

