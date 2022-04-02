require("dotenv").config({ path: "./.env" });
const express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();

var allowedOrigins = [
  "http://localhost:3000",
  "https://text-crud-react.herokuapp.com",
  "https://text-crud.herokuapp.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

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
app.listen(process.env.PORT || 8000, function () {
  console.log("Server is Up");
});

const router = require("./routes/word");
app.use("/word", router);
