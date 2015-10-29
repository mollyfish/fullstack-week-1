'use strict';

var Greet  = module.exports = exports = function() {
  this.greeting = 'insert evil laugh here';
  this.farewell = 'ttfn';
};

Greet.prototype.greet = function() {
  return this.greeting;
};

// HANDY for constructor functions and adding methods on the prototype down the line
