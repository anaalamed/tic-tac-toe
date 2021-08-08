import Game from '../models/game';

export default async function getGame(req, res) {
    // const { _id } = req.body;
    const id = req.params.id;
    const game = await Game.findOne({ _id: id });
    res.json(game);
}
