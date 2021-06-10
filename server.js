const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var result = weight / height;

  res.send("your bmi is: " + result);
});

app.listen(3000, () => {
  console.log("server started at port 3000");
});
