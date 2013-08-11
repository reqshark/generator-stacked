![](http://cl0udc0ntr0l.github.io/generator-stacked/img/banner-sm.png)

> A Backbone.js and Require.js Test Driven Workflow inspired by [Greg Franko](http://gregfranko.com/)'s [Backbone-Require-Boilerplate-Lite](https://github.com/BoilerplateMVC/Backbone-Require-Boilerplate-Lite). Together we promote decoupling your JavaScript into modules, separating business logic from application logic using Collections/Models and Views, including non-AMD Compatible Third Party Scripts in your project, optimizing all of your JavaScript (minify, concatenate, etc), and unit testing your JavaScript all while minimizing the time it takes to perform monotonous tasks.

<hr>

Website: [cl0udc0ntr0l.github.io/generator-stacked](http://cl0udc0ntr0l.github.io/generator-stacked)

NPM: [npmjs.org/](https://npmjs.org/package/generator-stacked)

Repository: [github.com/cl0udc0ntr0l/generator-stacked](https://github.com/cl0udc0ntr0l/generator-stacked)

Bugs: [github.com/cl0udc0ntr0l/generator-stacked/issues](https://github.com/cl0udc0ntr0l/generator-stacked/issues)

<hr>

## THE WORKFLOW
<img src="http://cl0udc0ntr0l.github.io/generator-stacked/img/toolset.png" width="100%">

The Stacked workflow is comprised of 8 tools for improving your productivity and satisfaction when building a web app: yo (the scaffolding tool), grunt (the build tool), npm (for sever side package management), mocha (for server side unit testing), bower (for client side package management), jasmine (for client side unit testing), backbone.js (for decoupling of data logic from application logic) and require.js (for making our code modular and maintainable).

## INCLUDED LIBRARIES
- Server Side
	- [Express](http://expressjs.com/)
	- [Grunt](http://gruntjs.com/mo)
	- [Mocha](http://visionmedia.github.io/mocha/)
	- [r.js](http://requirejs.org/docs/optimization.html)
	- [Nodemon](https://github.com/ChrisWren/grunt-nodemon)
- Client Side
	- [Backbone.js](http://backbonejs.org/)
	- [Lodash](http://lodash.com/)
	- [Require.js](http://requirejs.org/)
	- [Almond.js](https://github.com/jrburke/almond)
	- [jQuery](http://jquery.com/)
	- [Jasmine](http://pivotal.github.io/jasmine/)
	- [Bootstrap 3.0](http://getbootstrap.com/)
	- [Font-Awesome](http://fortawesome.github.io/Font-Awesome/)

## INSTALLATION
1. Download and install [Node.js](http://nodejs.org/#DOWNLOAD)
2. Install Yeoman, Grunt and Bower: `npm install -g yo` (yes it downloads them all)
3. Install Stacked: `npm install -g generator-stacked`
4. You're done!  Time to generate your first Stacked App.

## THE GENERATOR
Generate your app.

	mkdir myApp && cd $_
	yo stacked`

<img align="right"  src="http://cl0udc0ntr0l.github.io/generator-stacked/img/questions.png" alt="Prompt">

Stacked will ask you some questions to help you set up your app.

### YOUR NAME
Your name is injected into package.json and bower.json as the author of the app.

### YOUR GITHUB USERNAME
Your github username is used to create repository paths in package.json and bower.json

### APP NAME
This is the name of your app.  It is complete repository paths and populate other files.  

> In the future I may use this varible to namespace the app.

### MVC SETS
I choose the name "MVC set" to represent a backbone.js Model, Collection, View and Template.  The generator automaticlly includes all your files with require.js, so you just initalize and write!

> When you First create your app, the MVC option will initalize a Backbone.js Router and Require.js Init file for you.  It works a little differently in the MVC Subgenerator, which we will get to in a moment.

### PATH SELECTION
The path selector allows you to nest your Models, Views, Collections and Templates.  This is to allow for a more organized enviornment.  The path root is displayed for you `root -> public/js/app/[type]/` [type] being Model, View, Collection or Template. You can just continue after the forward slash `users/admin` or `user\admin\` The trailing slash is optional.  Again... Require.js includes stay intact.

> Yeoman automatically checks for file collisions and will prompt you for action.  You are not in danger :)

### USING LESS
If you want to use LESS, which you should (default is yes), you can just hit enter and Stacked will automatically include the dependencies in package.json and create grunt tasks for compiling.  If you decide you would rather stick with CSS or use SASS, Stylus etc... Stacked will strip those includes from all files so you are only using what you need.

### USING MOCHA
[Backbone-Require-Boilerplate-Lite](https://github.com/BoilerplateMVC/Backbone-Require-Boilerplate-Lite) ships with Jasmine on the client, but I also wanted to have the option to use a server side testing framework.  I went with mocha because I feel it's the most flexible.  Its very easy to use after you get it all set up.  Luckily Stacked takes care of that for you.

# INITIALIZE THE BUILD
After you make your selections, your app will be generated and all dependencies will be installed. The console will log out how to initialize your build.
<img align="right"  src="http://cl0udc0ntr0l.github.io/generator-stacked/img/after-app.png" alt="After Creation">

### GRUNT INIT
To initalize your build type `grunt init` A few things are happening here which are good to understand and leverage.

######BOOTSTRAP
The first thing the init task does is copy your bootstrap.css file from the bower install directory 
`public/js/libs/bootstrap/dist/css` to `public/css`

> Leverage!
> If you want to edit your bootstrap styles you could edit `public/css/bootsrap.css` or you can `cd public/js/libs/bootsrap/less` edit the less files and rebuild bootstrap, then `cd your/apps/root` and re-initialize your build to pull the new css into your `public/css` directory.

######AVAILABLE BOOTSTRAP GRUNT TASKS

`grunt test` Run jshint and qunit

`grunt dist-js` Compile Bootstrap js

`grunt dist-css` Compile Less

`grunt dist` Compile Full Distribution

> Be careful with updating boostrap with bower if you edit the less files.  They will be overwriten with the new bootstrap install.

#### FONT-AWESOME
Next we pull in Font-Awesome CSS from bower.  Any time a new version is released you can `bower update font-awesome` from your app root to update the packages and then run `grunt init` to re-initialize your app.

#### LESS
If you chose the less option, your `public/css/includes/less/custom.less` file will be compiled to `public/css/includes/css/custom.css`

#### JS
Finally, All your JS is run through jshint and r.js.  You can switch the production variable in `public/index.html` to `true` to use the minified build.

> Back to our apps root directory now.

### GRUNT BUILD
'grunt build' will lint your javascript and run r.js to compile you production build.

### GRUNT TEST

`grunt test` runs jslint and mocha tests

<img align="right"  src="http://cl0udc0ntr0l.github.io/generator-stacked/img/grunt-tasks.png" alt="Grunt Tasks">

### GRUNT SERVER

`grunt server` Starts up your express server and uses nodemon to listen for changes

## SUBGENERATORS
Subgenerators create the components of your app that you use the most, Models, Collections, Views and Templates. There are three subgenerators that cover all bases. 


### MODEL
`yo stacked:model`
![](http://cl0udc0ntr0l.github.io/generator-stacked/img/model-generator.png)

The Model generator creates a Model and optionally, a collection

### VIEW
`yo stacked:view`
![](http://cl0udc0ntr0l.github.io/generator-stacked/img/view-generator.png)

The view generator creates a View and optionally, a Template. There is no template generator because it really wouldn't save any time.

### MVC
`yo stacked:mvc`
![](http://cl0udc0ntr0l.github.io/generator-stacked/img/mvc-generator.png)

The mvc generator creates a full set of backbone components, minus the Router.  You will have to include your new set in your existing Router manually (for now). 

## BACKBONE-REQUIRE-BOILERPLATE-LITE
> Stacked App structures are based on [Backbone-Require-Boilerplate](https://github.com/BoilerplateMVC/Backbone-Require-Boilerplate) by [Greg Franko](https://github.com/gfranko), [Nick Pack](https://github.com/nickpack) and [Brett Jones](https://github.com/brettjonesdev). 

I have made some enhancements to the server side.
- Abstracted an API file: `server/API.js` file for REST calls.
- Abstracted enviornment specific variables into a config file `server/congif/config.js`
- Added support for mocha

Below is the documentation for [Backbone-Require-Boilerplate](https://github.com/BoilerplateMVC/Backbone-Require-Boilerplate).

index.html
----------
Uses a large portion of the [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate) HTML and CSS.  As you continue down the page to the first `<script>` tag, you will notice there is a `production` local JavaScript variable that is used to communicate to your application whether you would like to load production or development CSS and JavaScript files.

_Loading Files_

The `loadFiles()` method is then used to load all of the correct CSS and JavaScript files.  Below is what get's included:

_Production Mode_

In production mode, your app's single minified and concatenated JavaScript file is loaded using Almond.js instead of Require.js.  Your application's minfied common CSS file is also included.

_Development Mode_

In development mode, your app's non-minified JavaScript files are loaded using Require.js instead of Almond.js.  Your application's non-minified common CSS file is also included.

_Loader Methods_

You will notice that the CSS files and the Require.js file are being included on the page via the `loadFiles()` method (which uses the `loadCss()` and `loadJS()` methods internally).  Require.js does not officially support [loading CSS files](http://requirejs.org/docs/faq-advanced.html#css), which is why I included the `loadCSS()` method to asynchronously include CSS files.  Loading CSS asynchronously also allows the flexibilty/mechanism to load different CSS files if a user is on a mobile/desktop device.

> Feel free to use the `loadCSS()` and `loadJS()` methods to load any other dependencies your application may have that you do not want to use Require.js for.

Init.js
-------------
This file includes your mobile Require.js configurations.

If we look at the Require.js configurations, we will see the first thing being configured are the paths.  Setting paths allow you to define an alias name and file path for any file that you like.

Typically, you want to set a path for any file that will be listed as a dependency in more than one module (eq. jQuery, Backbone).  This saves you some typing, since you just have to list the alias name, and not the entire file path, when listing dependencies.  After all of the file paths are set, you will find the Shim configuration (Added in Require.js 2.0).


The Shim configuration allows you to easily include non-AMD compatible JavaScript files with Require.js (a separate library such as [Use.js](https://github.com/tbranyen/use.js/) was previously needed for this).  This is very important, because Backbone versions > 0.5.3 no longer support AMD (meaning you will get an error if you try to use both Require.js and the latest version of Backbone).  This configuration is a much better solution than manually editing non-AMD compatible JavaScript files to make sure the code is wrapped in a `define` method.  Require.js creator [James Burke](http://tagneto.blogspot.com/) previously maintained AMD compatible forks of both Backbone.js and Underscore.js because of this exact reason.

```js
   shim: {
      // Backbone
      "backbone": {
         // Depends on underscore/lodash and jQuery
         "deps": ["underscore", "jquery"],
         // Exports the global window.Backbone object
         "exports": "Backbone"
      },
   }
```

The Shim configuration also takes the place for the old Require.js `order` plugin.  Within the Shim configuration, you can list files and their dependency tree.  An example is jQuery plugins being dependent on jQuery:

```js
   shim: {
      // Twitter Bootstrap plugins depend on jQuery
      "bootstrap": ["jquery"]
   }
```

> You do not need a shim configuration for [jQuery](http://www.jquery.com) or [lodash](https://github.com/bestiejs/lodash) because they are both AMD compatible.

After Require.js is configured, you will notice the `require` method is called.  The `require` method is asynchronously including all of the files/dependencies passed into the first parameter (jQuery, Backbone, Lodash, Router, etc) into the page.

Finally, a new router instance is instantiated to allow you to use Backbone's routing mechanism (keep reading below for more clarification).

> You don't need to instantiate a new router instance if you aren't using a Backbone Router class.

Router.js
---------------
This file starts with a define method that lists jquery, backbone, and View.js as dependencies. 

It is best practice to list out all of your dependencies for every file, regardless of whether or not they expose global objects and are already included in the page.  This is also especially important for the Require.js optimizer (which needs to determine which files depend on which other files).  

> If your dependencies do not expose global objects, then it is absolutely mandatory to list it as a dependency, since Require.js does not allow global variables (meaning your modules are private and cannot be accessed by other modules or code without explicitly listing them as dependencies).

The rest of the file is a pretty standard Backbone.js Router class:

There is currently only one route listed (which gets called if there is no hash tag on the url), but feel free to create more for your application.

> You must keep the `Backbone.history.start()` method call, since this is what triggers Backbone to start reacting to hashchange events.

When your default route is invoked, a new View instance is created, which calls the render method immediately to append the header template to the page.

View.js
-----------
View.js starts with a define method that lists all of its dependencies.

The rest of the file is a pretty standard Backbone.js View class:
   
Backbone.js View's have a one-to-one relationship with DOM elements, and a View's DOM element is listed in the `el` property.  After the `el` property is set, the View's model attribute is set to a new instance of the Model returned by Model.js (which was listed at the top as a dependency).  Next, the View's `render` method is called within the View's constructor, aka `initialize()` method, and the View's `template` property is set and appended to the page using the [Underscore.js](https://github.com/documentcloud/underscore) `template` method ported to Lodash.

> If you have read all of the documentation up until this point, you will most likely have already noticed that [lodash](https://github.com/bestiejs/lodash) is being used instead of Underscore.js.  Apart from having a bit better cross-browser performance and stability than Underscore.js, lodash also provides a custom build process.  Although I have provided a version of lodash that has all of the Underscore.js methods you would expect, you can download a custom build and swap that in.  Also, it doesn't hurt that Lodash creator, [John-David Dalton](https://twitter.com/jdalton), is an absolute performance and API consistency maniac =)

Next, you will find an `events` object.  Here is where all of your View DOM event handlers associated with the HTML element referenced by your View's `el` property should be stored.  Keep in mind that Backbone is using the jQuery `delegate` method, so it expects a selector that is within your View's `el` property.  I did not include any events by default, so you will have to fill those in yourself.  Below is an example of having an events object with one event handler that calls a View's `someMethod()` method when an element with a class name of _someElement_ is clicked.

```js
   // View Event Handlers
   events: {
      "click .someElement": "someMethod"
   },
```

I am also declaring a `render` method within the View.  Backbone expects you to override the `render` method with your own functionality, so that is what I did.  All my `render` method does is append the View's template to the page.

> You do not need to use Underscore.js templates.  In fact, you don't need to use templates at all.  I just included them so you would understand how to use them.

Finally, I am returning the View class.

template.html
-------------
This file includes a template that is included via the Require.js [text plugin](https://github.com/requirejs/text).  Templates are typically a useful way for you to update your View (the DOM) if a Model attribute changes.  They are also useful when you have a lot of HTML and JavaScript that you need to fit together, and instead of concatenating HTML strings inside of your JavaScript, templates provide a cleaner solution.  Look at Underscore's documentation to read more about the syntax of Underscore.js templates.

Model.js
--------
Model.js starts with a define method that lists jquery and backbone as dependencies.

The rest of the file is a pretty standard Backbone.js Model class.

Like other Backbone.js classes, there is an `initialize()` method that acts as the Model's constructor function.  There is also a **defaults** object that allows you to set default Model properties if you wish.

Finally, The Backbone.js `validate` method is provided for you.  This method is called any time an attribute of the model is set.  Keep in mind that all model attributes will be validated (once set), even if a different model attribute is being set/validated.  This does not make much sense to me, so if you prefer only the Model attributes that are currently being saved/set to be validated, then use the validateAll option provided by [Backbone.validateAll](https://github.com/gfranko/Backbone.validateAll).

Finally, a new Model class is returned.

Collection.js
------------------
Collection.js starts with a define method that lists jquery, backbone, and UserModel.js as dependencies.

The rest of the file is a pretty standard Backbone.js Collection class that is used to store all of your Backbone Models.  The Collection model property is set to indicate that all Models that will be within this Collection class will be of type Model (the dependency that is passed into the file).

Finally, a new Collection class is returned.

Gruntfile.js
------------
This file is ready made for you to have your entire project optimized using Grunt.js, the [Require.js Optimizer](https://github.com/jrburke/r.js/) and [almond.js](https://github.com/jrburke/almond).

Grunt.js is a JavaScript command line task runner that allows you to easily automate common development tasks such as code linting, minification, and unit testing.

> Running the Jasmine Tasks with Grunt has not been implemented yet.

Almond.js a lightweight AMD shim library created by [James Burke](https://github.com/jrburke), the creator of Require.js.  Almond is meant for small to medium sized projects that use one concatenated/minified JavaScript file.  If you don't need some of the advanced features that Require.js provides (lazy loading, etc) then Almond.js is great for performance.

Backbone-Require-Boilerplate sets you up to use Require.js in development and Almond.js in production.  By default, Backbone-Require-Boilerplate is in _development_ mode, so if you want to try out the production build, read the production instructions below.

**Production Build Instructions**

Navigate to the root directory of the Backbone-Require-Boilerplate folder and type **grunt** and wait a few seconds for the build to complete.

**Note:** If you are on a Windows machine, you will have to type `grunt.cmd`

Once the script has finished, you will see that both _DesktopInit.min.js_ and _MobileInit.min.js_, and the _mobile.min.css_ and _desktop.min.css_ files will be created/updated.

Next, update the `production` local variable inside of **index.html** to be **true**.

And that's it!  If you have any questions just create in an issue on Github.

SpecRunner.html
---------------
This file is the starting point to your Jasmine test suite and outputs the results of your Jasmine tests.  It includes Require.js and points it to **testInit.js** for all of the proper configurations.

TestInit.js
-----------
This file includes all of the Require.js configurations for your Jasmine unit tests.  This file will look very similar to the **Init.js** file, but will also include Jasmine and the jasmine-jquery plugin as dependencies.

You will also notice a _specs_ array that will allow you to add as many specs files as your application needs (Specs folders are where your unit tests are).  The boilerplate only includes one specs js file by default, so only one specs item is added to the array.  Finally, once the specs file is included by the `require()` call, Jasmine is initialized

spec.js
-------
This file contains all of your Jasmine unit tests.  Only seven tests are provided, with unit tests provided for Views, Models, Collections, and Routers (Mobile and Desktop).  I'd write more, but why spoil your fun?  Read through the tests and use them as examples to write your own.

The entire file is wrapped in an AMD define method, with all external module (file) dependencies listed.  The Jasmine tests should be self explanatory (BDD tests are supposed to describe an app's functionality and make sense to non-techy folk as well), but if you have any questions, just file an issue and I'll respond as quickly as I can.

## DEMONSTRATIONS AND DOCUMENTATIONS
If you want to see Stacked and [Backbone-Require-Boilerplate](https://github.com/BoilerplateMVC/Backbone-Require-Boilerplate) in action, you can head over to [cl0udc0ntr0l.github.io/generator-stacked] To watch my screen cast showing the power of yeoman and Greg's screencast demonstrating [Backbone-Require-Boilerplate](https://github.com/BoilerplateMVC/Backbone-Require-Boilerplate). I have also included quick links to the documentation for all the libraries included in Stacked.
	
## CHANGE LOG

`0.0.1` - Aug 11, 2013
- initial commit


## TODO
- Automatate route creation and Require.js linking in existing router
- Add database setup (Mongodb with Mongoose or Redis)
- Live Reload

## LICENSE
Copyright (c) 2013 Randy Lebeau  
Licensed under the [MIT license](https://github.com/cl0udc0ntr0l/generator-stacked/blob/master/LICENSE-MIT). 

