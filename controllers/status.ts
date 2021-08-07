import Game from '../models/game';

export default async function gameStatus(req, res) {
	const { _id, playerId } = req.body;
	const game = await Game.findOne({ _id });

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

	const board = game.board;
	console.table(board);

	// check WIN !
	var result = true;
	for (var i = 0; i < board.length; i++) {
		// lines
		console.log("lines");
		for (var j = 0; j < board.length; j++) {
			result = result && board[i][j] === sign;
			console.log(i, j, result);
		}
		if (result === true) {
			console.log('win!');
		}
		result = true;

		// columns
		console.log("columns");
		for (var j = 0; j < board.length; j++) {
			result = result && board[j][i] === sign;
			console.log(j, i, result);
		}
		if (result === true) {
			console.log('win!');
		}
		result = true;
	}
	// diagonal
	console.log("1 diagonal");
	for (var i = 0; i < board.length; i++) {
		result = result && board[i][i] === sign;
		console.log(i, i, result);
	}
	if (result === true) {
		console.log('win!');
	}
	result = true;

	console.log("2 diagonal");
	for (var i = 0; i < board.length; i++) {
		result = result && board[board.length - 1 - i][i] === sign;
		console.log(board.length - 1 - i, i, result);
	}
	if (result === true) {
		console.log('win!');
	}


	res.json({ message: 'win' });
}
