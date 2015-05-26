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
  grunt.loadNpmTasks('grunt-contrib-sass');

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
    sass:{
      prod:{
        src: ['app/sass/main.sass'],
        dest: 'production/styles/main.css'
      },
      dev:{
        src: ['app/sass/main.sass'],
        dest: 'development/styles/main.css'
      }
    },
    copy:{
      prod:{
        src: 'index.html',
        dest: 'production/'
      },
      dev:{
        src: 'index.html',
        dest: 'development/'
      },
      prod_styles:{
        expand: true,
        cwd: 'app/',
        src: 'styles/**/*.css',
        dest: 'production/'
      },
      dev_styles:{
        expand: true,
        cwd: 'app/',
        src: 'styles/**/*.css',
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
  grunt.registerTask('build:all',['add_view', 'sass', 'browserify', 'copy']);
  grunt.registerTask('build:prod',['add_view:prod', 'sass:prod', 'browserify:prod', 'copy:prod']);
  grunt.registerTask('build:dev',['add_view:dev', 'sass:dev', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('build:prod:all',['add_view:prod', 'browserify:prod', 'sass:prod', 'copy:prod', 'copy:prod_images', 'copy:prod_video']);
  grunt.registerTask('build:dev:all',['add_view:dev', 'browserify:dev', 'sass:dev', 'copy:dev', 'copy:dev_images', 'copy:dev_video']);

};