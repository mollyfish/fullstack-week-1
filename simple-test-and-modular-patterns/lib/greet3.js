'use strict';

var Greet = exports = module.exports = function() {
  this.greeting = 'welcome to coding bootcamp';
  this.farewell = 'now go get a job';
};

Greet.prototype.greet = function() {
  return this.greeting;
}

// HANDY for constructor functions and adding methods on the prototype down the line
