const express = require("express");
const bodyParser = require("body-parser");

const app = express();

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
  if (req.body.username == "admin") res.send("false");
  else res.send("true");
});

app.listen(6969, err => {
  if (err) console.log(err);
  console.log("Server started at port 6969");
});