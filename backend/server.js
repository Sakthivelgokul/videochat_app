import Express from "express";
import router from "./api/testWebrtc/route.js";
//test
import db from "./db/connect.js";
import test from "./db/test/dbTest.js"
import testI from "./db/test/intialTest.js";
import io from "./api/ws/testp2p.js";
import cors from "cors"
const server = Express();
const port = 5000;

// server.listen(port);
const { socket, fun } = io(server)
console.log(`server start on http://localhost:${port}`)
socket.on("connection", (socket) => {
    socket.on("hello", (arg) => {
      console.log(arg); // world
    });
  });
fun(port)
server.use(Express.json())
server.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}))
//test
server.use(router)
db()
// test()
// testI()
