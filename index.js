const port = process.env.PORT || 5000;
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

let data = [
  {
    email: "mike456ponder@outlook.com",
    password: "saman1998",
    created: "no",
  },
  {
    email: "cdfzcp4knkd1s32@outlook.com",
    password: "ek~PWv>jRgf1{D7O}[|{R6",
    created: "no",
  },
  {
    email: "x48tv4one104lex-l9zuvz@outlook.com",
    password: "maV5exe!SgYkCO@xj9{k",
    created: "no",
  },
  {
    email: "Krish3366Saunders8873@outlook.com",
    password: "Manson8238Roray",
    created: "no",
  },
];
app.get("/server", function (req, res) {
  res.send(JSON.stringify(data));
});
app.post("/server", function (req, res) {
  toBeCreated = "";
  number = 0;
  for (let a = 0; a < data.length; ++a) {
    if (data[a].created == "no") {
      toBeCreated = data[a].email;
      number = a;
      break;
    }
  }
  if (req.body.email == toBeCreated) {
    data[number].created = "yes";
  }
});
app.use(express.static("client"));
app.listen(port);
