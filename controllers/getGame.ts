import Game from '../models/game';

export default async function getGame(req, res) {
    // const { id } = req.body;
    const id = req.params.id;
    console.log(id);
    const game = await Game.findOne({ _id: id });
    res.json(game);
}
