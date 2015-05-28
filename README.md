#Scaffolding for Single Page Web Apps

##Use this structure to simplify organization and building of single page web applications by:

####Keeping all server side code other than server.js in the folder api.
####Keeping all client side code except for the static page index.html in the folder app.
####Providing a Gruntfile.js that is pre-configured to enable building of development and production code.
####Providing a component view architecture that allows html files to be used as views anywhere including inside each other

####Explaination of parts and usage
#####Simply clone the repository and start writing your app.
#####My approach to this project is to provide all the requirements for enterprise web applications, but keeping everything as minimal as is possible. Still, you may want to remove the pieces that you do not require. For example, if you do not need a back end server in your application, you may want to remove the server components.

####Front End Usage
#####Adding JavaScript
Store all JavaScript files in the js folder or a subdirectory of it. Dynamically created JavaScript goes in the js/build/ and nothing else should be stored there. The js/controllers/ folder is for js files that support application views. If a view requires JavaScript to be fired when it is loaded, it should be stored here with the same name as the view except for the js extension. The file should be structured like so:
```use strict;
   module.exports = function(){
    JavaScript to execute goes here
   };
```
In addition to crafting the JavaScript this way, the file must be registered in the `app/js/controllers/controllerRegistry.js` file by adding the file name (without the extension) as new property name and as the value preceded by ./ all enclosed in single quotes. For example the following registers a script called home.js and a script called login.js:
```
'use strict';
module.exports = function (){
  return{
    home: require('./home'),
    loginView: require('./loginView')
  };
};
```
Because it is a good practice to keep things small an modular, `helpers.js` is provided for containing functions that are useful to invoke throughout the application. Also in order to keep the controller files readable and the application more maintainable use this file to organize the application into small testable functions as much as possible. The file already contains winReady, which is used by main.js start the application.
 In order to add a function to helper.js, simply add it as a method in the object that is being returned.
 For example, if you want to add a function called cleanup, the following...
```
module.exports = function(){
  return {
    winReady: function (f) {
      var preOnload = window.onload;
      if (typeof preOnload !== 'function') {
        window.onload = f;
      }
      else {
        window.onload = function () {
          preOnload();
          f();
        }
      }
    }
  };
};
```
becomes...

```
module.exports = function(){
  return {
    winReady: function (f) {
      var preOnload = window.onload;
      if (typeof preOnload !== 'function') {
        window.onload = f;
      }
      else {
        window.onload = function () {
          preOnload();
          f();
        }
      }
    },
    cleanup: function(x,y,z){
    //do stuff with x, y z
    }
  };
};
```
It is probable that the `helpers.js` file will grow to a size that makes breaking it down into more files practical. This is no problem. Simply keep the new files somewhere in the app/js parent folder and require them inside whatever js file in which you desire to access them similar to the way `helper.js` is required in `main.js`

`var helper = require('./helpers')();`

As you can see above, the object provided by `helper.js` is assigned to the variable named helper. In this way the functions from `helpers.js` are accessible by calling the method name off of helper: `helper.cleanup(x,y,z);`
Files that you add and require in would be accessed the same way.

`main.js`
main.js is where the application is kicked off and tied together. Only startup requirements should be found or invoked here. If this file breaks, everything breaks.

`router.js`
router.js is responsible for displaying the view and invoking its controller code, if any. You probably will not want to modify this file.

#####The Views
Create the views using html partials and saving them in the app/views folder. During the build process, the html files in the app/views folder are compiled into a view object which is then saved to the `js/build/views.js` file. This file exports the object to the application.

#####The directory structure:
#####The root contains Gruntfile.js, index.html, package.json and server.js
#####As with all projects package.json contains dependencies and other information about the application.
    npn install
#####will load all the dependencies for the scaffolding.
#####The grunt file contains the configuration and tasks for building and testing the application.
#####For example:
    grunt build:prod:all
#####will build production code, including copying all the images and videos and other static assets to the production folder but
    grunt build:prod
#####will only build the code and copy it to the production directory.

#####You will probably want modify grunt tasks for your own purposes. When doing so, keep in mind that the following order must be maintained for the build to work correctly. add_view, browserify, copy.

#####Gitignore.js
This file is prefigured to ignore the usual folders as well as the folders that contain dynamic content.

####api folder
This folder contains all the server side code and assets
#####api/js
Keep all the JavaScript here. The sub folders should be self explanatory.

####app folder
All the client side code and assets are stored here. images and video sub folders should be pretty obvious.
#####app/js
It is important to keep all your JavaScript files for the client under this folder. Sub folders are okay as long as they reside in this folder. If they do not, they will not be included in the build.
#####app/js/build
This folder is used to store files created by the build process. If you delete this folder the build will fail.
#####app/js/controllers
Use this folder to store JS files created to fire when an associated view is called.
#####app/js/helpers.js
Add functions to this file that are created to support the application globally.
#####app/js/main.js
Kick off the application here. Everything for startup goes here and here is where the application is wired together.
#####app/js/router.js
The function responsible for routing views and executing their respective controllers.
#####app/sass
Store sass and scss files here.
#####app/styles
This directory is for css files.
#####app/views
This folder should only contain html files created for views. Separate sub folders may be used. This is the directory used by add_view to compile the view.js object.

####development
Contains the results of the development build.
####production
Contains the results of the production build.
####node_modules
Contains all the node dependency modules
