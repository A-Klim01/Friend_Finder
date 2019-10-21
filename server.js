// NPM's and Server Ports
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

//method USE URL
app.use(express.urlencoded({extended:true}))
app.use(express.json());

require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)
// explains what port the app is using
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });