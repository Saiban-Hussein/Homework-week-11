var express = require("express");
var path = require("path");
// Sets up and initializes the Express App server
// =============================================================
var app = express();
// GET /api/notes
  // Basic route that sends the user first to the index.js file
  app.get('/', (req, res) => {
    // "__dirname" is a global obj and gives you the path of the currently running file
      res.sendFile(path.join(__dirname,'../public/index.html'));
  });
  // GET /notes - Should return the notes.html file. 
  app.get('/notes', (req, res) => {
      res.sendFile(path.join(__dirname,'../public/notes.html'));
  });
  
// GET * - Should return the index.html file 
app.get("*", (req, res) => res.sendFile(__dirname + "/public/index.html"));

// Starts the server to begin listening
// =============================================================
module.exports=app;