const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const app = express();

const dictionary = require('./dictionary.json');

app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "ALLOWALL");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, DELETE, OPTIONS"
  );

  if (req.headers.origin) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  }

  res.setHeader("Access-Control-Allow-Credentials", true);

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));

app.use(express.static('./public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post("/", (req, res) => {
  res.sendFile(__dirname + '/public/success.html');
});

app.post("/checkUsernameAvailability", (req, res) => {
  setTimeout(() => {
    if (req.body.username == "admin") res.send("false");
    else res.send("true");
  }, 1500);
});

app.get("/dictionary", (req, res) => {
  res.sendFile(__dirname + '/public/dictionary.html');
});

app.get("/typeahead", (req, res) => {
  setTimeout(() => {
    var search = req.query.search.trim();

    if (search) {
      res.send({
        search,
        result: Object.keys(dictionary)
          .filter(key => key.includes(search))
          .splice(0, 10)
      });
    }
    else res.send([]);
  }, Math.random() * 250 + 100);
});

app.get("/lookup", (req, res) => {
  var search = req.query.search.trim();
  res.send({
    search,
    result: dictionary[search] || "No matching word found"
  });
});

app.listen(6969, err => {
  if (err) console.log(err);
  console.log("Server started at port 6969");
});