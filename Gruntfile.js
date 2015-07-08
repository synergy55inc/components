module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    app: {
      tmp: 'tmp',
      src: 'public/assets/js'
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        '<%= app.src %>/**/*.js',
        '!<%= app.src %>/apps/config/*.js',
        '!<%= app.src %>/vendor/*.js',
        '!<%= app.src %>/apps/config/storage/localstorage.js',
        'Gruntfile.js'
      ]
    },

    jst: {
      compile: {
        options: {
          prettify: true,
          processName: function(filename) {
            // simplify the template names
            filename = filename.replace('public/assets/js/templates/', '');
            return filename.replace('.html', '');

            // Use this in ES1?
            //var basename = path.basename( filename, path.extname(filename) );
            //return basename.replace(/[-\.]([a-z])/g, function (g) { return g[1].toUpperCase(); });
          },
          templateSettings: {
            interpolate: /\{\{=(.+?)\}\}/g,
            escape: /\{\{-(.+?)\}\}/g,
            evaluate: /\{\{(.+?)\}\}/g
          }
        },
        files: {
          '<%= app.tmp %>/templates.js': ['<%= app.src %>/**/*.html']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jst');

  grunt.registerTask('default', ['jshint']);
};
