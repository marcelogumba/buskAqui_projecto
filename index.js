var express = require('express');
var app = express();

app.get("/api/home", function (req, res) {
    res.json({message: 'Seja ben-vindo'});
  });

  var listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });