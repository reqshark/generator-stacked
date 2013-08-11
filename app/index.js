'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var StackedGenerator = module.exports = function StackedGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function() {
    if (this.mocha) {
      this.log.write('\n\n\nYou are almost ready to start building your app. First you have to initialize your build...\n\n');
      this.log.write('    > grunt init\n\n');
      this.log.write("Then install Mocha globally (if you haven't already)\n\n");
      this.log.write('    > npm install -g mocha\n\n');
      this.log.write("Then you're done! Start up your server\n\n");
      this.log.write("    > grunt server\n\n");
    } else {
      this.log.write('\n\n\nYou are almost ready to start building your app. First you have to initialize your build...\n\n');
      this.log.write('    > grunt init\n\n');
      this.log.write("Then you're done! Start up your server\n\n");
      this.log.write("    > grunt server\n\n");
    }
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(StackedGenerator, yeoman.generators.Base);

StackedGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'confirm',
    name: 'confirmed',
    message: 'Hello! Welcome to Stacked. Ready to create?',
    default: true
  }, {
    name: 'userName',
    message: 'What is your name?',
    default: 'A Person'
  }, {
    name: 'github',
    message: 'What is your github username?',
    default: 'someuser'
  }, {
    name: 'projectName',
    message: 'What do you want to name your app?',
    default: 'myApp'
  }, {
    name: 'initName',
    message: 'What do you want to call your first MVC set?',
    default: 'Index'
  }, {
    name: 'path',
    message: 'What do you want to place your first MVC set? root -> public/js/app/[type]/',
    default: ''
  }, {
    type: 'confirm',
    name: 'less',
    message: 'Do you want to use LESS?',
    default: true
  }, {
    type: 'confirm',
    name: 'mocha',
    message: 'Do you want to use Mocha for server side testing?',
    default: true
  }];

  this.prompt(prompts, function(props) {
    this.confirmed = props.confirmed;
    this.userName = props.userName;
    this.github = props.github;
    this.projectName = props.projectName;
    this.initName = props.initName;
    this.path = props.path;
    this.less = props.less;
    this.mocha = props.mocha;

    this.path = this.path.replace(/\/?$/, '/');

    cb();
  }.bind(this));
};

StackedGenerator.prototype.app = function app() {

  // Public Root
  this.mkdir('public');

  // CSS
  this.mkdir('public/css');
  this.mkdir('public/css/includes');
  this.mkdir('public/css/includes/css');
  this.mkdir('public/css/includes/less');

  // IMG
  this.mkdir('public/img');

  // JS
  this.mkdir('public/js');
  this.mkdir('public/js/libs');
  this.mkdir('public/js/libs/plugins');
  this.mkdir('public/js/tests');
  this.mkdir('public/js/tests/config');
  this.mkdir('public/js/tests/specs');

  // APP
  this.mkdir('public/js/app');
  this.mkdir('public/js/app/collections');
  this.mkdir('public/js/app/config');
  this.mkdir('public/js/app/models');
  this.mkdir('public/js/app/routers');
  this.mkdir('public/js/app/templates');
  this.mkdir('public/js/app/views');

  // TESTS
  this.mkdir('public/js/tests');
  this.mkdir('public/js/tests/config');
  this.mkdir('public/js/tests/specs');

  // Server
  this.mkdir('server');
  this.mkdir('server/config');

  // TL-FILES
  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('_.bowerrc', '.bowerrc');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
  this.copy('_.gitignore', '.gitignore');
  this.copy('_LICENSE-MIT', 'LICENSE-MIT');
  this.copy('_README.md', 'README.md');
  this.copy('_travis.yml', '.travis.yml');
  this.template('public/_index.html', 'public/index.html');
  this.copy('public/_SpecRunner.html', 'public/SpecRunner.html');
  this.copy('public/_Backbone.validateAll.js', 'public/js/libs/plugins/Backbone.validateAll.js');

};

StackedGenerator.prototype.projectfiles = function projectfiles() {
  // Server
  this.copy('server/_server.js', 'server/server.js');
  this.copy('server/_API.js', 'server/API.js');
  this.copy('server/_config.js', 'server/config/config.js');

  // App
  this.template('public/_Collection.js', 'public/js/app/collections/' + this.path + this.initName + 'Collection.js');
  this.template('public/_Model.js', 'public/js/app/models/' + this.path + this.initName + 'Model.js');
  this.template('public/_View.js', 'public/js/app/views/' + this.path + this.initName + 'View.js');
  this.template('public/_Template.html', 'public/js/app/templates/' + this.path + this.initName + '.html');
  this.template('public/_Router.js', 'public/js/app/routers/Router.js');
  this.copy('public/_Init.js', 'public/js/app/config/Init.js');

  // CSS
  this.copy('public/_app.css', 'public/css/app.css');
  this.copy('public/_jasmine.css', 'public/css/jasmine.css');

  // Tests
  this.copy('public/_TestInit.js', 'public/js/tests/config/TestInit.js');
  this.copy('public/_spec.js', 'public/js/tests/specs/spec.js');

  // Images
  this.copy('public/_ajax-loader.gif', 'public/img/ajax-loader.gif');
  this.copy('public/_favicon.ico', 'public/img/favicon.ico');
  this.copy('public/_jasmine-favicon.png', 'public/img/jasmine-favicon.png');

};

StackedGenerator.prototype.useLess = function useLess() {
  if (this.less) {
    this.mkdir('public/css/includes/less');
    this.template('public/_custom.less', 'public/css/includes/less/custom.less');
  } else {
    this.copy('public/_custom.css', 'public/css/includes/css/custom.css');
  }
};

StackedGenerator.prototype.useMocha = function useMocha() {
  if (this.mocha) {
    this.mkdir('server/tests');
    this.mkdir('server/tests/specs');
    this.copy('server/_spec.js', 'server/tests/specs/spec.js');
  }
};

StackedGenerator.prototype.getDependencies = function getDependencies() {
  var cb = this.async();

  this.installDependencies({
    bower: true,
    npm: true,
    skipInstall: false,
    callback: function() {
      cb();
    }
  });

};