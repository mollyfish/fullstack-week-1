'use strict';

var Greet = exports = module.exports = function() {
  this.greeting = 'insert evil laugh here';
  this.farewell = 'ttfn';
};

Greet.prototype.greet = function() {
  return this.greeting;
}

// HANDY for constructor functions and adding methods on the prototype down the line
