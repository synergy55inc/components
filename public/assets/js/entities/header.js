'use strict';

import _ from 'underscore';
import Marionette from 'backbone.marionette';

import app from '../app';
import pick from '../vendor/backbone.picky';

var Header = Backbone.Model.extend({
  initialize: function() {
    var selectable = new Backbone.Picky.Selectable(this);
    _.extend(this, selectable);
  }
});

var HeaderCollection = Backbone.Collection.extend({
  model: Header,

  initialize: function() {
    var singleSelect = new Backbone.Picky.SingleSelect(this);
    _.extend(this, singleSelect);
  }
});

var headers;

var initializeHeaders = function() {
  headers = new HeaderCollection([
    { name: 'Contacts', url: 'contacts', navigationTrigger: 'contacts:list' },
    { name: 'Users', url: 'users', navigationTrigger: 'users:list' },
    { name: 'About', url: 'about', navigationTrigger: 'about:show' }
  ]);
};

var API = {
  getHeaders: function() {
    if (headers === undefined) {
      initializeHeaders();
    }
    return headers;
  }
};

app.reqres.setHandler('header:entities', function() {
  return API.getHeaders();
});
