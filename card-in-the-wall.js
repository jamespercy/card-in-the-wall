var express = require('express');
var http = require('http');

var app = express();

app.use(express.static(__dirname + '/'));

//get a snapshot from  the webcam
app.get('/snapshot', function(req, res){
	
});

var server = app.listen(9000, function() {
    console.log('Listening on port %d', server.address().port);
});