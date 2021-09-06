import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import gameRouter from './routes';
import connect from './models';

const app = express();
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());

app.use(gameRouter)

// connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tic-tac-toe');
connect(process.env.MONGODB_URI || 'mongodb+srv://new:Y0pKX0vQzGkFctkv@cluster0.wld4w.mongodb.net/tic-tac-toe?retryWrites=true&w=majority');


app.use("*", (req, res) => {
    res.send("<h1>Welcome to your simple server! Awesome right</h1>");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Tic tac toe app is running on hosting http://localhost:${PORT}`))
