var express = require('express');
var app = express();
app.post('/', function(req, res){
    console.log("dfhks");
    res.send('djks');
});

app.listen(3000);