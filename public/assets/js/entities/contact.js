'use strict';

import _ from 'underscore';
import $ from 'jquery';
import Marionette from 'backbone.marionette';

import app from '../app';

import BaseModel from './model';

var Contact = BaseModel.extend({
  urlRoot: 'contacts_legacy',

  defaults: {
    firstName: '',
    lastName: '',
    phoneNumber: ''
  },

  validate: function(attrs, options) {
    var errors = {};
    if (! attrs.firstName) {
      errors.firstName = 'can\'t be blank';
    }
    if (! attrs.lastName) {
      errors.lastName = 'can\'t be blank';
    } else {
      if (attrs.lastName.length < 2) {
        errors.lastName = 'is too short';
      }
    }
    if (!_.isEmpty(errors)) {
      return errors;
    }
  },

  parse: function(response) {
    var data = response;
    if (response && response.contact) {
      data = response.contact;
    }
    data.fullName = data.firstName + ' ' + data.lastName;
    //      data.avatarUrl = data['avatar-url'];
    return data;
  },

  sync: function(method, model, options) {
    console.log('Contact sync function called.');
    return BaseModel.prototype.sync.call(this, method, model, options);
  }
});

var ContactCollection = Backbone.Collection.extend({
  url: 'contacts_legacy',
  model: Contact,
  comparator: 'firstName'
});

var API = {
  getContactEntities: function() {
    var contacts = new ContactCollection();
    var defer = $.Deferred();
    contacts.fetch({
      success: function(data) {
        defer.resolve(data);
      }
    });
    return defer.promise();
  },

  getContactEntity: function(contactId) {
    var contact = new Contact({ id: contactId });
    var defer = $.Deferred();
    contact.fetch({
      success: function(data) {
        defer.resolve(data);
      },
      error: function(data) {
        defer.resolve(undefined);
      }
    });
    return defer.promise();
  }
};

app.reqres.setHandler('new:contact:entity', function() {
  return new Contact();
});

app.reqres.setHandler('contact:entities', function() {
  return API.getContactEntities();
});

app.reqres.setHandler('contact:entity', function(id) {
  return API.getContactEntity(id);
});
