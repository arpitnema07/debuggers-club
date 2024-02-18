import express from "express";
import next from "next";
import { join } from "path";
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const handle = app.getRequestHandler();
import backend from "./backend/index.js";
app.prepare().then(() => {
  const mainServer = express();

  // mainServer.get("/", (req, res) => {
  //   return res.send("All");
  // });

  mainServer.use((req, res, next) => {
    const path = req.path;
    console.log(path);
    if (
      path.startsWith("/api") ||
      path.startsWith("/algo") ||
      path.startsWith("/call") ||
      path.startsWith("/peer")
    ) {
      next();
    } else {
      return handle(req, res);
    }
  });
  mainServer.use(express.static(join(__dirname, "public")));

  mainServer.set("view engine", "ejs");
  const opinions = {
    debug: true,
  };

  io.on("connection", (socket) => {
    socket.on("join-room", (roomId, userId, userName) => {
      socket.join(roomId);
      setTimeout(() => {
        socket.broadcast.to(roomId).emit("user-connected", userId);
      }, 1000);
      socket.on("message", (message) => {
        io.to(roomId).emit("createMessage", message, userName);
      });
    });
  });

  mainServer.use("/call/peerjs", ExpressPeerServer(server, opinions));

  mainServer.get("/call", (req, res) => {
    res.redirect(`/call/mentor`);
  });

  mainServer.get("/call/:room", (req, res) => {
    res.render("room", { roomId: req.params.room });
  });
  // Define a route for the root URL
  mainServer.get("/algo/bst", (req, res) => {
    res.sendFile(join(__dirname, "public", "bst.html"));
  });
  mainServer.get("/algo/path", (req, res) => {
    res.sendFile(join(__dirname, "public", "path.html"));
  });
  mainServer.get("/algo/sorting", (req, res) => {
    res.sendFile(join(__dirname, "public", "sorting.html"));
  });
  mainServer.get("/algo/trie", (req, res) => {
    res.sendFile(join(__dirname, "public", "trie.html"));
  });
  mainServer.use("/api", backend);
  mainServer.use("/", handle);

  mainServer.listen(port, (err) => {
    if (err) throw err;

    console.log(`> Ready on http://localhost:${port}`);
  });
});
