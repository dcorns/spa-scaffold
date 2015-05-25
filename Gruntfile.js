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
      prod:{
        src:  'app/views/**/*.html',
        dest: 'app/js/build/views.js'
      },
      dev:{
        src:  'app/views/**/*.html',
        dest: 'app/js/build/views.js'
      }
    },
    browserify:{
      prod:{
        src: 'app/js/**/*.js',
        dest: 'production/bundle.js'
      },
      dev:{
        src: 'app/js/**/*.js',
        dest: 'development/bundle.js'
      }
    },
    copy:{
      prod:{
        src: ['index.html', 'app/styles/**/*.*'],
        dest: 'production/'
      },
      dev:{
        src: ['index.html', 'app/styles/**/*.*'],
        dest: 'development/'
      },
      prod_images:{
        src: ['app/images/**/*.*'],
        dest: 'production/'
      },
      dev_images:{
        src: ['app/images/**/*.*'],
        dest: 'development/'
      },
      prod_video:{
        src: ['app/video/**/*.*'],
        dest: 'production/'
      },
      dev_video:{
        src: ['app/video/**/*.*'],
        dest: 'development/'
      }
    }
  });
  grunt.registerTask('build',['add_view', 'browserify', 'copy']);
  grunt.registerTask('build:prod',['add_view:prod', 'browserify:prod', 'copy:prod']);
  grunt.registerTask('build:dev',['add_view:dev', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('build:prod:all',['add_view:prod', 'browserify:prod', 'copy:prod', 'copy:prod_images', 'copy:prod_video']);
  grunt.registerTask('build:dev:all',['add_view:dev', 'browserify:dev', 'copy:dev', 'copy:dev_images', 'copy:dev_video']);

};