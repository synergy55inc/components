'use strict';

import app from 'app';
import Marionette from 'marionette';
import ListController from './list/list_controller';
import ShowController from './show/show_controller';
import EditController from './edit/edit_controller';

var ContactsAppRouter = Marionette.AppRouter.extend({
  appRoutes: {
    'contacts(/filter/criterion::criterion)': 'listContacts',
    'contacts/:id': 'showContact',
    'contacts/:id/edit': 'editContact'
  }
});

var API = {
  listContacts: function(criterion) {
    ListController.listContacts(criterion);
    app.execute('set:active:header', 'contacts');
  },

  showContact: function(id) {
    ShowController.showContact(id);
    app.execute('set:active:header', 'contacts');
  },

  editContact: function(id) {
    EditController.editContact(id);
    app.execute('set:active:header', 'contacts');
  }
};

app.on('contacts:list', function() {
  app.navigate('contacts');
  API.listContacts();
});

app.on('contacts:filter', function(criterion) {
  if (criterion) {
    app.navigate('contacts/filter/criterion:' + criterion);
  } else {
    app.navigate('contacts');
  }
});

app.on('contact:show', function(id) {
  app.navigate('contacts/' + id);
  API.showContact(id);
});

app.on('contact:edit', function(id) {
  app.navigate('contacts/' + id + '/edit');
  API.editContact(id);
});

app.on('contacts:start', function() {
  var router = new ContactsAppRouter({
    controller: API
  });
});
