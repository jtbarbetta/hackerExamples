/**
 * app.js - Main NodeJS Application Controller
 */

// Module dependencies.
var fs = require('fs'),
    path = require('path');


process.stdin.resume();
process.stdin.setEncoding('utf-8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function(data) {
    __input_stdin += data;
    console.log("__input_stdin: ",__input_stdin);
});

function summation(numbers) {
    var result = 0;
    for (var i =0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

var wstream = fs.createWriteStream(process.env.OUTPUT_PATH);

// When user hits ctrl+D we get the 'end' event
process.stdin.on('end', function() {
    __input_stdin_array = __input_stdin.split("\n");
    console.log('__input_stdin_array: ', __input_stdin_array);
    var res;

    var _numbers = [];
    for (var i = 0; i < __input_stdin_array.length; i++) {
        console.log("__input_stdin_array[i].trim(): ", isNaN(parseInt(__input_stdin_array[i].trim())));
        var num = parseInt(__input_stdin_array[i].trim());
        console.log("num: ", num);
        if (isNaN(num) === false) {
            _numbers.push(num);
        }
    }

    console.log("_numbers: ",_numbers);
    res = summation(_numbers);
    wstream.write(res+"\n");

    wstream.end();
});

// Do any clean up when node program stops
process.on('SIGTERM', function () {
    console.log('SIGTERM - stream has been stopped');
    process.exit(0);
});

process.on('SIGINT', function () {
    console.log('SIGINT - stream has been stopped');
    process.exit(0);
});

