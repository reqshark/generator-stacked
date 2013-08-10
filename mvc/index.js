'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var MvcGenerator = module.exports = function MvcGenerator(args, options, config) {
	// By calling `NamedBase` here, we get the argument to the subgenerator call
	// as `this.name`.
	yeoman.generators.Base.apply(this, arguments);

	console.log('You called the mvc subgenerator with the argument ' + this.name + '.');
};

util.inherits(MvcGenerator, yeoman.generators.NamedBase);

MvcGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	// have Yeoman greet the user.
	console.log(this.yeoman);

	var prompts = [{
		name: 'initName',
		message: 'What do you want to name your MVC set?',
		default: 'User'
	}, {
		name: 'path',
		message: 'Where would you like to place your Mvc? root -> public/js/app/[type]/',
		default: ''
	}];

	this.prompt(prompts, function(props) {
		this.initName = props.initName;
		this.path = props.path;
		if (this.path !== '' ) {
			this.path = this.path.replace(/\/?$/, '/');
		}

		cb();
	}.bind(this));
};

MvcGenerator.prototype.files = function files() {
	this.template('_Collection.js', 'public/js/app/collections/' + this.path + this.initName + 'Collection.js');
	this.template('_Model.js', 'public/js/app/models/' + this.path + this.initName + 'Model.js');
	this.template('_View.js', 'public/js/app/views/' + this.path + this.initName + 'View.js');
	this.template('_Template.html', 'public/js/app/templates/' + this.path + this.initName + '.html');
};