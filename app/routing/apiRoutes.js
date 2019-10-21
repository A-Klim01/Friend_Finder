// Pulls the data from friends.js file.
var friends = require("../data/friends");



module.exports = function (app) {

  //method that gets the information from friends.js
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });
    //method post where information of best match
  app.post("/api/friends", function (req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    }
    var userData = req.body;
    var userScores = userData.scores;
    //this var will calc the diff between the user scores and the scores of each user in the database
    var totalDifference;
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var userCurrentScore = userScores[j];
        totalDifference += Math.abs(parseInt(userCurrentScore) - parseInt(currentFriendScore));
      }
      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }
    friends.push(userData); //Once calc are complete method push to move data
    res.json(bestMatch)

  });


  //Method Post if info matches criteria, ELSE Method PUSH false
  app.post("/api/tables", function (req, res) {
    
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });


  app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
