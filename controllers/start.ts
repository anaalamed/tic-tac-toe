import { Types } from 'mongoose';
import Game from '../models/game';
import { getGameByCode } from '../services/game-service';

export default async function startGame(req, res) {
	const { playerName, code } = req.body || {};
	const identifier = (req.headers.user);
	console.log(playerName, code);

	if (identifier) {
		const game = await getNewGameForPlayerA(identifier);
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
	game.board = [['', '', ''], ['', '', ''], ['', '', '']];
	await game.save();
	return game;
}

async function getNewGameForPlayerB(playerName, code) {
	var game = await getGameByCode(code);
	// console.log('1', game);

	// if (game.playerB) {
	// 	throw new Error('this game is already full');
	// };

	// game.code = null;
	const rand = Math.round(Math.random());
	game.xSign = rand ? "A" : "B";
	game.playerB = {
		identifier: Types.ObjectId(),
		name: playerName,
		wins: 0
	};
	game.currentTurn = rand ? "A" : "B";
	// game.board = [['', '', ''], ['', '', ''], ['', '', '']];

	await game.save();
	return game;
}

