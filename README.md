#Scaffolding for Single Page Web Apps

##Use this structure to simplify organization and building of single page web applications by:

###Keeping all server side code other than server.js in the folder api.
###Keeping all client side code except for the static page index.html in the folder app.
###Providing a Gruntfile.js that is pre-configured to provide building of development and production code.
###Providing a component view architecture that allows html files to be used as views anywhere including inside each other

##Explaination of parts and usage
###Simply clone the repository and start writing your app.
###My approach to this project is to provide all the requirements for enterprise web applications. You may want to remove the pieces that you do not require. For example, if you do not need a back end server in your application, you may want to remove the server components.

###The directory structure:
####The root contains Gruntfile.js, index.html, package.json and server.js
#####As with all projects package.json contains dependencies and other information about the application.
    npn install
#####will load all the dependencies for the scaffolding.
#####The grunt file contains the configuration and tasks for building and testing the application.
#####For example:
    grunt build:prod:all
#####will build production code, including copying all the images and videos and other static assets to the production folder but
    grunt build:prod
#####will only build the code and copy it to the production directory.
#####You will probably want modify Gruntfile.js for your own purposes.
