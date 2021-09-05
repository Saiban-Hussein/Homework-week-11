// Dependencies && Routes 
// =============================================================
var express = require("express");
// const allRoutes=require('./routes/allRoutes');
const apiRoutes=require('./routes/apiRoutes');
const htmlRoutes=require('./routes/htmlRoutes');
// const htmlRoutes=require('./routes/htmlRoutes');
var path = require("path");

// app should have db.json file on the backend used to store and retrieve notes using the fs module.
// Sets up and initializes the Express App server
// =============================================================
var app = express();
// Sets an initial port, use later in listener
var PORT = process.env.PORT || 3000;
// Middleware sets up the Express app to find/use files and handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static path 
app.use(express.static(path.join(__dirname, 'public')));
// app.use(allRoutes);
app.use(apiRoutes);
app.use(htmlRoutes);
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});