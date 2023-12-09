import express from 'express';
import cors from "cors"
import connectDb from "./db/connect.js";
import io from './routes/ws/index.js';
//test
import testRouter from './routes/test/serverTest.js';
import webrtcRouter from './routes/webrtc/index.js';
const db = connectDb();
const server = express();
const port = 5000;
const { socket, fun } = io(server)
server.use(express.json())
server.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}))
server.use(testRouter)
server.use(webrtcRouter)

fun(port, () => {
  console.log(`server start at http://127.0.0.1:${port}`);
})