'use strict';

import app from '../../app';
import Marionette from 'backbone.marionette';
import ListController from './list/list_controller';
import ShowController from './show/show_controller';

var ContactsAppRouter = Marionette.AppRouter.extend({
  appRoutes: {
    'contacts(/filter/criterion::criterion)': 'listContacts',
    'contacts/:id': 'showContact'
//    'contacts/:id/edit': 'editContact'
  }
});

var API = {
  listContacts: function(criterion) {
    ListController.listContacts(criterion);
    app.execute('set:active:header', 'contacts');
  },

  showContact: function(id) {
    console.log('in show');
    ShowController.showContact(id);
    app.execute('set:active:header', 'contacts');
//  },
//
//  editContact: function(id){
//    ContactsApp.Edit.Controller.editContact(id);
//    ContactManager.execute('set:active:header', 'contacts');
  }
};

app.on('contacts:list', function() {
  app.navigate('contacts');
  API.listContacts();
});

//ContactManager.on('contacts:filter', function(criterion){
//  if(criterion){
//    ContactManager.navigate('contacts/filter/criterion:' + criterion);
//  }
//  else{
//    ContactManager.navigate('contacts');
//  }
//});
//
app.on('contact:show', function(id) {
  console.log('contact:show');
  app.navigate('contacts/' + id);
  API.showContact(id);
});

//ContactManager.on('contact:edit', function(id){
//  ContactManager.navigate('contacts/' + id + '/edit');
//  API.editContact(id);
//});

app.on('contacts:start', function() {
  console.log('contacts:start');
  var router = new ContactsAppRouter({
    controller: API
  });
});
