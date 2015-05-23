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
    add_view: {
      dist:{
        src:  'app/views/**/*.html',
        dest: 'app/js/build/views.js'
      },
      dev:{
        src:  'app/views/**/*.html',
        dest: 'app/js/build/views.js'
      }
    },
    browserify:{
      dist:{
        src: 'app/js/**/*.js',
        dest: 'production/bundle.js'
      },
      dev:{
        src: 'app/js/**/*.js',
        dest: 'production/bundle.js'
      }
    },
    copy:{
      dist:{
        src: ['index.html'],
        dest: 'production/'
      },
      dev:{
        src: ['index.html'],
        dest: 'production/'
      }
    }
  });
  grunt.registerTask('build',['add_view', 'browserify', 'copy']);
};