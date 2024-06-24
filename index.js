import express from 'express'
import * as dotenv from 'dotenv'
import databaseConnect from './config/database.js';
import bodyParser from 'body-parser'; 

const app=express();

dotenv.config()

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(bodyParser.json());

databaseConnect();

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})