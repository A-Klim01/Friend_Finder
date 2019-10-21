
var path = require("path");

module.exports = function(app) {
  
  // Method get to home.html page
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
  // Method get survey.html page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // Method get All files
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};
