const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const db = require('./Models')
const encoder = require('./decoder.js')
const axios = require('axios')
const cheerio = require('cheerio')
const nodemailer = require('nodemailer');
const E0 = process.env.E0 || null
const E1 =  process.env.E1 || null
// const faker = require("faker");
const AccessToken = require("twilio").jwt.AccessToken || null;
const VideoGrant = AccessToken.VideoGrant || null;

// const passport = require("passport");


// const users = require("./routes/api/users");

// Define middleware here
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



if(process.env.NODE_ENV === "development") { // Configuration for development environment
  var webpackDevMiddleware = require("webpack-dev-middleware");
  var webpackConfig = require("./webpack.config.js");
  const webpackCompiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(webpackCompiler));
  app.use(express.static(path.join(__dirname, "app")));


} else if(process.env.NODE_ENV === "production") { // Configuration for production environment
  app.use(express.static(path.join(__dirname, "client/build")));

}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
