import {getGameByCode, getGameByIdentifier, joinGamePlayer} from '../services/game-service';

export default async function startGame(req, res) {
	//
	const {playerName, code} = req.body || {};
	const identifier = req.headers.token;

	if (identifier) {
		const game = await getNewGameForPlayerA(identifier);
		res.json(game);
	} else if (playerName && code) {
		const game = await getNewGameForPlayerB(playerName, code);
		res.json(game);
	} else {
		return res.status(400).send({message: 'you should fill the game code and your name'});
	}
}

async function getNewGameForPlayerA(identifier) {
	const game = await getGameByIdentifier('A', identifier);

	return {};
}

async function getNewGameForPlayerB(playerName, code) {
	const game = await getGameByCode(code);

	if (game.playerB) {
		throw new Error('this game is already full');
	}

	const updatedGame = joinGamePlayer(game, playerName);

	return {};
}

