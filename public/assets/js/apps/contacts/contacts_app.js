'use strict';

import app from '../../app';
import Marionette from 'backbone.marionette';
import ListController from './list/list_controller';

var ContactsAppRouter = Marionette.AppRouter.extend({
  appRoutes: {
    'contacts(/filter/criterion::criterion)': 'listContacts'
//    'contacts/:id': 'showContact',
//    'contacts/:id/edit': 'editContact'
  }
});

var API = {
  listContacts: function(criterion) {
    ListController.listContacts(criterion);
    app.execute('set:active:header', 'contacts');
//  },
//
//  showContact: function(id){
//    ContactsApp.Show.Controller.showContact(id);
//    ContactManager.execute('set:active:header', 'contacts');
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
//ContactManager.on('contact:show', function(id){
//  ContactManager.navigate('contacts/' + id);
//  API.showContact(id);
//});
//
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
