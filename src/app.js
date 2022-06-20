const express = require('express');
const morgan = require('morgan');
const path  = require('path');
const app = express()

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".ejs");

app.get('/', (req, res) => {
    res.render('index');
  })

module.exports = app;
app.listen(3000, () => {
  console.log('Server running on port 3000');
})