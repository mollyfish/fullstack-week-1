'use strict';

var greet = require(__dirname + '/lib/greet');
var greet2 = require(__dirname + '/lib/greet2');
var Greet = require(__dirname + '/lib/greet3');

var hallmark = new Greet;

console.log(greet());
console.log(greet2.greet(process.argv[2]));
console.log(hallmark.greeting);
console.log(hallmark.farewell);
