import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";

const app = new express();
app.use(bodyParser.json({limit:"50mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"50mb", extended:true}));
app.use(cors());
dotenv.config({path: "../properties/.env"});

const port = process.env.port;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser : true , useUnifiedTopology : true})
.then(()=>app.listen(port, ()=>console.log(`server running on port: ${port}` )))