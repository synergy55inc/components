module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'public/assets/js/**/*.js',
        '!public/assets/js/apps/config/*.js',
        '!public/assets/js/vendor/*.js',
        '!public/assets/js/apps/config/storage/localstorage.js',
        'Gruntfile.js'
      ]
    },

    jst: {
      compile: {
        options: {
          namespace: 'templates',
          processName: function(filename) {
            // simplify the template names
            filename = filename.replace('public/assets/js/templates/', '');
            return filename.replace('.html', '');
          },
          templateSettings: {
            interpolate: /\{\{=(.+?)\}\}/g,
            escape: /\{\{-(.+?)\}\}/g,
            evaluate: /\{\{(.+?)\}\}/g
          }
        },
        files: {
          'public/assets/js/jst/templates.js': ['public/assets/js/**/*.html']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jst');

  grunt.registerTask('default',['jshint']);
};
