import Game from '../models/game';

export default async function gameStatus(req, res) {
	const { code } = req.body;
	const game = await Game.findOne({ code });

	res.json(game);
}
