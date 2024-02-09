// express und http Module importieren. Sie sind dazu da, die HTML-Dateien
// aus dem Ordner "public" zu veröffentlichen.
var express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

var server = require("http").createServer(app);
var port = 3000;

server.listen(port, function () {
  console.log("Server listening on port " + port);
});

app.get("/list", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.get("/inc", (req, res, next) => {
  var inc = parseInt(req.cookies["inc"]);
  if (isNaN(inc)) {
    inc = 0;
  }
  res.cookie("inc", ++inc, { maxAge: 10800 }).send("cookie set to" + inc);
});
