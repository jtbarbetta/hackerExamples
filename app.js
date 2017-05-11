/**
 * app.js - Main NodeJS Express Application Controller
 */

// Module dependencies.
var express = require('express'),
    path = require('path');

//var WebSocketServer = require('ws').Server;

var app = express();

// Setup the application's environment.
app.set('port',  process.env._HACKERRANK_APP_PORT || 4000);
app.set('host',  process.env.HACKERRANK_APP_HOST || 'localhost');
//app.set('view engine', 'pug');
//app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

// Route all GET requests to our public static index.html page
//app.get('/', function(req, res){
//});

// Start listening for requests
var server = app.listen(app.get('port'), app.get('host'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

/*
var wss = new WebSocketServer({
  server: server
});

wss.on('connection', function(ws) {
  ws.on('message', function(message) {
    console.log("*******",message);
    var msg = JSON.parse(message);
    if (msg && msg.startCount) {
        startCount(msg.filename || "");
    }
  });
});
*/

// Do any clean up when node program stops
process.on('SIGTERM', function () {
    console.log('SIGTERM - stream has been stopped');
    process.exit(0);
});

process.on('SIGINT', function () {
    console.log('SIGINT - stream has been stopped');
    process.exit(0);
});

