const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = new express();

var dict = [
  {
    term: "Rock",
    defined: "Solid object to throw on someone"
  },
  {
    term: "Milk",
    defined: "Liquid"
  },
  {
    term: "Persue",
    defined: "Follw someone"
  },
  {
    term: "Butter",
    defined: "Follw someone"
  }
];
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: false
  })
);

app.use((req, res, next) => {
  console.log(`${req.method} for ${req.url}`);
  next();
});
app.use(express.static("./public"));
app.use(cors());

app.get("/dictionary-api", (req, res) => {
  res.json(dict);
});

app.post("/dictionary-api", (req, res) => {
  var item = {
    term: req.body.term,
    defined: req.body.defined
  };
  dict.push(item);
  res.json(dict);
});
app.delete("/dictionary-api/:term", (req, res) => {
  let index = dict.indexOf(req.params.term);
  dict = dict.splice(index, 1);
  res.json(dict);
});

app.listen(9000);

console.log("Server listening on 9000");
