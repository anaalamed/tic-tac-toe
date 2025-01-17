import { models } from 'mongoose';
import Game from '../models/game';

export default async function playerMove(req, res) {
	const { playerId, move, code } = req.body;
	console.log(move);
	const game = await Game.findOne({ code });

	// player A or B ?
	var player = null;
	if (game.playerA.identifier == playerId) {
		player = "A";
	} else if (game.playerB.identifier == playerId) {
		player = "B";
	}

	// sign
	const sign = (game.xSign === player) ? "x" : "o";
	console.log(sign);

	// turn ? move
	if (game.currentTurn === player) {
		console.log('turn');
		if (game.board[move[0]][move[1]] === '') {
			const object = { ['board.' + move[0] + '.' + move[1]]: sign };
			// await game.updateOne({ $set: object }, { upsert: true });
			await Game.findOneAndUpdate({ code }, { $set: object }, { new: true });
			console.log('move');
		}
	};

	// change turn 
	if (game.currentTurn === "A") {
		game.currentTurn = "B";
	} else if (game.currentTurn === "B") {
		game.currentTurn = "A";
	}

	await game.save();
	console.table(game.board);
	res.json(game);
}
