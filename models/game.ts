import { model, Schema, Types, Document, isValidObjectId } from 'mongoose';

const GameSchema = new Schema<Game>({
	code: String,
	// _id: Types.ObjectId,
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
		enum: ['A', 'B', null]
	},
	currentTurn: {
		type: String,
		enum: ['A', 'B', null]
	},
	board: [
		[{
			type: String,
			enum: ['x', 'o', '']
		}]
	],
});

interface Game extends Document {
	code: any;
	playerA: any;
	playerB: any;
	xSign: any;
	currentTurn: any;
	board: any;
}
const Game = model<Game>('Game', GameSchema);

export default Game;
