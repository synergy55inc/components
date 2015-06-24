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
    transpile: {
      amd: {
        type: 'amd',
        files: [{
          expand: true,
          cwd: 'test/',
          src: ['*.js'],
          dest: 'tmp1/',
          ext: '.amd.js'
        }]
      }
    }


  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-es6-module-transpiler');

  grunt.registerTask('default',['jshint']);
  grunt.registerTask('trans',['transpile']);
};
