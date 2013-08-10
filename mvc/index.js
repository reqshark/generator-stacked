'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var MvcGenerator = module.exports = function MvcGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the mvc subgenerator with the argument ' + this.name + '.');
};

util.inherits(MvcGenerator, yeoman.generators.NamedBase);

MvcGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
