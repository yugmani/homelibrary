const { urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;
require("dotenv").config();

//add model variable
const BookList = require("./models/library");

//set middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//Mongoose connect
mongoose
  .connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

//Routes
app.get("/", async (req, res) => {
  try {
    // TodoTask.find({}, (err, tasks) => {
    res.render("index.ejs");
    // });
  } catch (err) {
    if (err) return res.status(500).send(err);
  }
});

//listening server on the port
app.listen(PORT, () => {
  console.log(`Server is listening on the port ${PORT}`);
});
