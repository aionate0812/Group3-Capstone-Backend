const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const tripRouter = require("./routes/tripRouter");
const bagRouter = require("./routes/bagRouter");
const weatherRouter = require("./routes/weatherRouter");
const itemRouter = require("./routes/itemRouter");
const todoListRouter = require("./routes/todoListRouter");
const categoryRouter = require("./routes/categoryRouter");
const itineraryRouter = require("./routes/itineraryRouter");
const userRouter = require("./routes/userRouter");
const loginHomepageRouter = require('./routes/loginHomepageRouter')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/itinerary", itineraryRouter);
app.use("/weather", weatherRouter);
app.use("/trip", tripRouter);
app.use("/bag", bagRouter);
app.use("/items", itemRouter);
app.use("/todolist", todoListRouter);
app.use("/categories", categoryRouter);
app.use("/user", userRouter);
app.use("/login_homepage", loginHomepageRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

// Send Error message
app.use((err, req, res, next) => {
  res.status(400).json({ error: err.toString() });
});

module.exports = app;
