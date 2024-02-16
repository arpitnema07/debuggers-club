const express = require("express");
const next = require("next");
const path = require("path");
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const backend = require("./backend/index");
app.prepare().then(() => {
  const mainServer = express();

  // mainServer.get("/", (req, res) => {
  //   return res.send("All");
  // });

  mainServer.use((req, res, next) => {
    const path = req.path;
    console.log(path);
    if (path.startsWith("/api") || path.startsWith("/algo")) {
      next();
    } else {
      return handle(req, res);
    }
  });
  mainServer.use(express.static(path.join(__dirname, "public")));

  // Define a route for the root URL
  mainServer.get("/algo/bst", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "bst.html"));
  });
  mainServer.get("/algo/path", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "path.html"));
  });
  mainServer.get("/algo/sorting", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "sorting.html"));
  });
  mainServer.get("/algo/trie", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "trie.html"));
  });
  mainServer.use("/api", backend);
  mainServer.use("/", handle);

  mainServer.listen(port, (err) => {
    if (err) throw err;

    console.log(`> Ready on http://localhost:${port}`);
  });
});
