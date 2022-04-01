require("dotenv").config({ path: "./.env" });
const express = require("express");
var mongoose = require("mongoose");
var app = express();
//Route
app.get("/", function (req, res) {
  res.send("hello world");
});
//MongoDB connection
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.kyjoe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);
mongoose.connection
  .once("open", function () {
    console.log("Database connected Successfully");
  })
  .on("error", function (err) {
    console.log("Error", err);
  });
//Server
app.listen(8000, function () {
  console.log("Server is Up");
});

const router = require("./routes/word");
app.use("/word", router);
