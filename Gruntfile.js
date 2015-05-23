/**
 * Gruntfile.js
 * Created by dcorns on 5/20/15.
 */
'use strict';
module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-add-view');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat:{
      dist:{
        src: 'views/**/*.html',
        dest: 'build/test.js'
      }
    },
    add_view: {
      dist:{
        src:  'views/**/*.html',
        dest: 'js/build/views.js'
      }
    },
    browserify:{
      dist:{
        src: 'js/**/*.js',
        dest: 'dist/bundle.js'
      }
    },
    copy:{
      dist:{
        src: ['index.html'],
        dest: 'dist/'
      }
    }
  });
  grunt.registerTask('build',['add_view', 'browserify', 'copy']);
};