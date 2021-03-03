import {createGameFromPlayer} from '../services/game-service';

export default async function createGameCode(req, res) {
	//
	const {playerName} = req.body || {};

	const {playerA, code} = await createGameFromPlayer(playerName);

	res.json({code, identifier: playerA.identifier});
}
