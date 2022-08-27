import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

import userRouter from './routes/userRouter.mjs';
import todoRouter from './routes/todoRouter.mjs';

const app = express();

//This is for local development only!!!!!!
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    res.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE");
    next();
  }
app.use(allowCrossDomain);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(todoRouter);

//MongoDB Connection
mongoose
	.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.nhs5bd3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
		useNewUrlParser: true
	}) 
	.then( () => console.log('Mongo DB here!.'))
	.catch(err => console.log(err));

app.listen(process.env.PORT, () => {
	console.log(`Server has started on the Port: ${process.env.PORT}`);
});