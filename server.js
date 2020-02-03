const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect('mongodb://wojo_host:wojojum1@ds045588.mlab.com:45588/heroku_7197wp8p', { useNewUrlParser: true, useFindAndModify: false});
app.use(require('./routes/api.js'));
app.use(require('./routes/html.js'));
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

