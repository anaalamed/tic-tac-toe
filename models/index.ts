import * as mongoose from 'mongoose';
import './game';

export default function connect(mongoUri) {
	mongoose.connect(mongoUri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	})
		.then(() => console.log('MONGODB is connected'))
		.catch(() => {
			console.log('MONGODB is not connected');
			process.exit(1);
		});
}
