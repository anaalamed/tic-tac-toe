import { Router } from 'express';
import startGame from '../controllers/start';
import playerMove from '../controllers/move';
import gameStatus from '../controllers/status';
import createGameCode from '../controllers/code';
import getGame from '../controllers/getGame';


const gameRouter = Router();

gameRouter.post('/api/game/code', createGameCode);
gameRouter.post('/api/game/start', startGame);
gameRouter.put('/api/game/move', playerMove);
gameRouter.get('/api/game', gameStatus);
gameRouter.get('/api/game/:id', getGame);


export default gameRouter;
