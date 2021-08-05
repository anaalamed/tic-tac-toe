import { Router } from 'express';
import startGame from '../controllers/start';
import playerMove from '../controllers/move';
import gameStatus from '../controllers/status';
import createGameCode from '../controllers/code';

const gameRouter = Router();

gameRouter.post('/api/game/code', createGameCode);
gameRouter.post('/api/game/start', startGame);
gameRouter.put('/api/game/move', playerMove);
gameRouter.get('/api/game', gameStatus);

export default gameRouter;
