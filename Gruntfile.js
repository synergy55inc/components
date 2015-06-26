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
          templateSettings: {
            interpolate: /\{\{=(.+?)\}\}/g,
            escape: /\{\{-(.+?)\}\}/g,
            evaluate: /\{\{(.+?)\}\}/g
          }
        },
        files: {
          'public/assets/js/jst/templates.js': ["public/assets/js/**/*.html"]
        }
      }
    },
    transpile: {
      amd: {
        type: 'amd',
        files: [{
          expand: true,
          cwd: 'public/assets/js',
          src: ['test/*.js'],
          dest: 'public/assets/js/tmp1',
          ext: '.amd.js'
        }]
      }
    },
    concat: {
      amd: {
        src: "public/assets/js/tmp1/test/*.amd.js",
        dest: "public/assets/js/my_library.amd.js"
      }
    }


  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-es6-module-transpiler');
  grunt.loadNpmTasks("grunt-contrib-concat");

  grunt.registerTask('default',['jshint']);
  grunt.registerTask('trans',['transpile', 'concat']);
};
