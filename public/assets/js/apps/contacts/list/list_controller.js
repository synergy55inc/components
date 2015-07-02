'use strict';
import app from '../../../app';

import $ from 'jquery';

import LoadingView from '../../../common/loading_view';
import Layout from './layout_view';
import Panel from './panel_view';
import ContactList from './list_view';
import FilteredCollection from '../../../entities/filtered';

require('../../../entities/contact');

export default {
  listContacts: function(criterion) {
    var loadingView = new LoadingView();
    app.regions.main.show(loadingView);

    var fetchingContacts = app.request('contact:entities');

    var contactsListLayout = new Layout();
    var contactsListPanel = new Panel();

    $.when(fetchingContacts).done(function(contacts) {
      console.log('contact', contacts);

      var filteredContacts = FilteredCollection({
        collection: contacts,
        filterFunction: function(filterCriterion) {
          var criterion = filterCriterion.toLowerCase();
          return function(contact) {
            if (contact.get('firstName').toLowerCase().indexOf(criterion) !== -1 ||
                contact.get('lastName').toLowerCase().indexOf(criterion) !== -1 ||
                contact.get('phoneNumber').toLowerCase().indexOf(criterion) !== -1) {
              return contact;
            }
          };
        }
      });

      if (criterion) {
        filteredContacts.filter(criterion);
        contactsListPanel.once('show', function() {
          contactsListPanel.triggerMethod('set:filter:criterion', criterion);
        });
      }

      var contactsListView = new ContactList({
        collection: filteredContacts
      });

      contactsListPanel.on('contacts:filter', function(filterCriterion) {
        filteredContacts.filter(filterCriterion);
        app.trigger('contacts:filter', filterCriterion);
      });

//      contactsListLayout.on('show', function() {
//        contactsListLayout.panelRegion.show(contactsListPanel);
//        contactsListLayout.contactsRegion.show(contactsListView);
//      });

//      contactsListPanel.on('contact:new', function() {
//        var newContact = new app.Entities.Contact();
//
//        var view = new ContactManager.ContactsApp.New.Contact({
//          model: newContact
//        });
//
//        view.on('form:submit', function(data) {
//          var contactSaved = newContact.save(data, {
//            success: function() {
//              contacts.add(newContact);
//              view.trigger('dialog:close');
//              var newContactView = contactsListView.children.findByModel(newContact);
//              // check whether the new contact view is displayed (it could be
//              // invisible due to the current filter criterion)
//              if (newContactView) {
//                newContactView.flash('success');
//              }
//            }
//          });
//          if (!contactSaved) {
//            view.triggerMethod('form:data:invalid', newContact.validationError);
//          }
//        });
//
//        app.regions.dialog.show(view);
//      });

//      contactsListView.on('childview:contact:show', function(childView, args) {
//        app.trigger('contact:show', args.model.get('id'));
//      });

//      contactsListView.on('childview:contact:edit', function(childView, args) {
//        var model = args.model;
//        var view = new ContactManager.ContactsApp.Edit.Contact({
//          model: model
//        });
//
//        view.on('form:submit', function(data) {
//          if (model.save(data)) {
//            childView.render();
//            view.trigger('dialog:close');
//            childView.flash('success');
//          } else {
//            view.triggerMethod('form:data:invalid', model.validationError);
//          }
//        });
//
//        app.regions.dialog.show(view);
//      });

//      contactsListView.on('childview:contact:delete', function(childView, args) {
//        args.model.destroy();
//      });

      app.regions.main.show(contactsListLayout);
    });
  }
};
