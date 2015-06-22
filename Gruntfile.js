module.exports = function(grunt) {
  'use strict';

  var webpack = require('webpack');
  var path    = require('path');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    app: {
      tmp : 'tmp',
      src : 'public/assets/js',
      dist: 'public/dist'
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        '<%= app.src %>/**/*.js',
        '!<%= app.src %>/vendor/*.js',
        '!<%= app.src %>/apps/config/storage/localstorage.js'
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
            //return basename.replace(/[-\.]([a-z])/g, function (g) {
            //  return g[1].toUpperCase();
            //});
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
    },

    watch: {
      options: {
        livereload: true
      },
      grunt: {
        files: ['Gruntfile.js']
      },
      jst: {
        files: ['<%= app.src %>/**/*.html'],
        tasks: ['jst']
      },
      // Refresh the browser when clientside code change
      assets: {
        files: ['<%= app.dist %>/**/*'],
        options: {
          spawn: false,
          livereload: 35729
        }
      }
    },

    webpack: {
      options: {
        entry: './<%= app.src %>/index.js',
        module: {
          loaders: [
            { test: './<%= app.src %>', loader: 'babel-loader' }
          ]
        },
        resolve: {
          alias: {
            marionette: 'backbone.marionette'
          },
          modulesDirectories: ['node_modules', 'tmp', '<%= app.src %>']
        },
        plugins: [
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            _: 'underscore'
          })
        ],
        cache: true,
        watch: true
      },

      dev: {
        output: {
          path: './<%= app.dist %>/',
          filename: 'bundle.js',
          pathinfo: true
        },
        debug: true
      },

      prod: {

      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', ['jshint','jst','webpack:dev','watch']);
};
