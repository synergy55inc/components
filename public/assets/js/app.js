'use strict';
import _ from 'underscore';
import Marionette from 'backbone.marionette';

var app = new Marionette.Application();

app.navigate = function(route,  options) {
  options = options || {};
  Backbone.history.navigate(route, options);
};

app.getCurrentRoute = function() {
  return Backbone.history.fragment;
};

app.on('before:start', function() {
  require('./apps/header/header_app');

  _.templateSettings = {
    interpolate: /\{\{=(.+?)\}\}/g,
    escape: /\{\{-(.+?)\}\}/g,
    evaluate: /\{\{(.+?)\}\}/g
  };

  var RegionContainer = Marionette.LayoutView.extend({
    el: '#app-container',

    regions: {
      header: '#header-region',
      main: '#main-region',
      dialog: '#dialog-region'
    }
  });

  app.regions = new RegionContainer();

  console.log('app.regions', app.regions);
//  app.regions.dialog.onShow = function(view) {
//    var self = this;
//    var closeDialog = function() {
//      self.stopListening();
//      self.empty();
//      self.$el.dialog('destroy');
//    };
//
//    this.listenTo(view, 'dialog:close', closeDialog);
//
//    this.$el.dialog({
//      modal: true,
//      title: view.title,
//      width: 'auto',
//      close: function(e, ui) {
//        closeDialog();
//      }
//    });
//  };
});

var StaticView = Marionette.ItemView.extend({
  el: '#main-region',
  template: '#static-template'
});

app.on('start', function() {
  app.vent.trigger('header:start');

  var staticView = new StaticView();
  staticView.render();

  if (Backbone.history) {
    Backbone.history.start();

    if (this.getCurrentRoute() === '') {
      app.trigger('contacts:list');
    }
  }
});

export default app;
