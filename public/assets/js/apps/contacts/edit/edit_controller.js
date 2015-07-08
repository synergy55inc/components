'use strict';

import $ from 'jquery';
import Marionette from 'marionette';

import app from '../../../app';
import LoadingView  from '../../../common/loading_view';
import EditView from './edit_view';
import EmptyView from '../show/empty_view';

export default {
  editContact: function(id) {
    var loadingView = new LoadingView();
    app.regions.main.show(loadingView);

    var fetchingContact = app.request('contact:entity', id);
    $.when(fetchingContact).done(function(contact) {
      var view;
      if (contact !== undefined) {
        view = new EditView({
          model: contact,
          generateTitle: true
        });

        view.on('form:submit', function(data) {
          if (contact.save(data)) {
            app.trigger('contact:show', contact.get('id'));
          } else {
            view.triggerMethod('form:data:invalid', contact.validationError);
          }
        });
      } else {
        view = new EmptyView();
      }

      app.regions.main.show(view);
    });
  }
};
