import express from "express";
import http from "http";
import { Server } from "socket.io";

// alternative for __dirname in Node.js when using ES6 modules
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  // console.log("a user connected : " + socket.id);
  socket.on("chat message", (msg) => {
    //console.log("message: " + msg);
    io.emit("chat message", msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected: " + socket.id);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
