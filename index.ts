import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import gameRouter from './routes';
import connect from './models';


connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tic-tac-toe')

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());

app.use(gameRouter)


app.listen(4000, () => console.log('Tic tac toe app is running!'))
