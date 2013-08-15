'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
	// By calling `NamedBase` here, we get the argument to the subgenerator call
	// as `this.name`.
	yeoman.generators.Base.apply(this, arguments);

	console.log('You called the view subgenerator with the argument ' + this.name + '.');
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	// have Yeoman greet the user.
	console.log(this.yeoman);

	var prompts = [{
		name: 'initName',
		message: 'What do you want to name your View?',
		default: 'Product'
	}, {
		name: 'path',
		message: 'Where would you like to place your View? root -> public/js/app/views/',
	}, {
		type: 'confirm',
		name: 'temp',
		message: 'Would you like to initialize a Template with your View?',
		default: true
	}];

	this.prompt(prompts, function(props) {
		this.initName = props.initName;
		this.path = props.path;
		this.temp = props.temp;
		if (this.path !== '' ) {
			this.path = this.path.replace(/\/?$/, '/');
		}
		cb();
	}.bind(this));
};

ViewGenerator.prototype.placeView = function placeView() {
	this.template('_View.js', 'public/js/app/views/' + this.path + this.initName + 'View.js');
};

ViewGenerator.prototype.placeTemplate = function placeTemplate() {
	if (this.temp) {
		this.template('_Template.html', 'public/js/app/templates/' + this.path + this.initName + '.html');
	}
};
