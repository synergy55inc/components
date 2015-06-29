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
          'public/assets/js/jst/templates.js': ['public/assets/js/**/*.html']
        }
      }
    },
    transpile: {
      cjs: {
        type: 'cjs',
        files: [{
          expand: true,
          cwd: 'public/assets/js',
          src: ['test/*.js'],
          dest: 'public/assets/js/tmp1',
          ext: '.js'
        }]
      }
    },
    concat: {
      cjs: {
        src: 'public/assets/js/test/*.js',
        dest: 'public/assets/js/my_library.js'
      }
    },
    babel: {
      compile: {
        options: {
            modules: 'commonStrict',
            optional:['es6.modules']
        },
        files: [{
          src:  ['public/assets/js/my_library.js'],
          dest: 'public/assets/js/app_compiled.js'
        }]

      }
  }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-es6-module-transpiler');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default',['jshint']);
  grunt.registerTask('compile',['concat','babel']);
  grunt.registerTask('trans',['transpile', 'concat']);
};
