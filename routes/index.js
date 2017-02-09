// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){

  console.log("The Project name is: " + data);
  res.render('index', data);
};

function projectClick(e){
	e.preventDefault();
	$(this).css("background-color", "#7fff00");
};