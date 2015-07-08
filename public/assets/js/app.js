'use strict';

import _ from 'underscore';
import Marionette from 'marionette';

import './vendor/jquery-ui-1.10.3';

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
  require('./apps/contacts/contacts_app');
  require('./apps/about/about_app');

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

  app.regions.dialog.onShow = function(view) {
    var self = this;
    var closeDialog = function() {
      self.stopListening();
      self.empty();
      self.$el.dialog('destroy');
    };

    this.listenTo(view, 'dialog:close', closeDialog);

    this.$el.dialog({
      modal: true,
      title: view.title,
      width: 'auto',
      close: function(e, ui) {
        closeDialog();
      }
    });
  };
});

app.on('start', function() {
  app.vent.trigger('header:start');
  app.vent.trigger('contact:start');
  app.vent.trigger('app:start');

  if (Backbone.history) {
    Backbone.history.start();

    if (this.getCurrentRoute() === '') {
      app.trigger('contacts:list');
    }
  }
});

export default app;
