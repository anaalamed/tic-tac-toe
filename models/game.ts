import {model, Schema, Types} from 'mongoose';

const GameSchema = new Schema({
	code: String,
	playerA: {
		identifier: Types.ObjectId,
		name: String,
		wins: Number
	},
	playerB: {
		identifier: Types.ObjectId,
		name: String,
		wins: Number
	},
	xSign: {
		type: String,
		enum: ['A', 'B']
	},
	currentTurn: {
		type: String,
		enum: ['A', 'B']
	},
	board: [
		[{
			type: String,
			enum: ['x', 'o', '']
		}]
	]
});

const Game = model('Game', GameSchema);

export default Game;
