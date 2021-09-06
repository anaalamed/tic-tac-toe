import Game from '../models/game';

export default async function gameStatus(req, res) {
	console.log("status");
	const playerId = req.headers.player;
	console.log(playerId);
	const _id = req.params.id;
	const game = await Game.findOne({ _id });
	var win = false;

	// player A or B ?
	var player = null;
	if (game.playerA.identifier == playerId) {
		player = "A";
	} else if (game.playerB.identifier == playerId) {
		player = "B";
	}

	const sign = (game.xSign === player) ? "x" : "o";
	const board = game.board;

	console.table(board);
	console.log(player);
	console.log(sign);

	// check WIN !
	var result = true;
	for (var i = 0; i < board.length; i++) {
		// lines
		// console.log("lines");
		for (var j = 0; j < board.length; j++) {
			result = result && board[i][j] === sign;
			// console.log(i, j, result);
		}
		if (result === true) {
			console.log('win!');
			win = true;
		}
		result = true;

		// columns
		// console.log("columns");
		for (var j = 0; j < board.length; j++) {
			result = result && board[j][i] === sign;
			// console.log(j, i, result);
		}
		if (result === true) {
			console.log('win!');
			win = true;
		}
		result = true;
	}
	// diagonal
	// console.log("1 diagonal");
	for (var i = 0; i < board.length; i++) {
		result = result && board[i][i] === sign;
		// console.log(i, i, result);
	}
	if (result === true) {
		console.log('win!');
		win = true;
	}
	result = true;

	// console.log("2 diagonal");
	for (var i = 0; i < board.length; i++) {
		result = result && board[board.length - 1 - i][i] === sign;
		// console.log(board.length - 1 - i, i, result);
	}
	if (result === true) {
		console.log('win!');
		win = true;
	}

	if (win === true) {
		res.json({ message: 'win', player: playerId });
	}
	else res.json({ message: 'no win' });
}
