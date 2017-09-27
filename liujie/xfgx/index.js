var express = require('express');
var app = express();
var join = require('path').join;

app.use(express.static(__dirname));
app.get('/', function(req, res){
	res.status(200).sendFile(join(__dirname, 'index.html'));
});

app.listen(3000);

