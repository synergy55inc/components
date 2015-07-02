'use strict';

import $ from 'jquery';
import Marionette from 'backbone.marionette';
import app from '../../../app';

import LoadingView  from '../../../common/loading_view';
import ShowContact  from './show_view';
import EmptyView    from './empty_view';

export default {
  showContact: function(id) {
    var loadingView = new LoadingView();
    app.regions.main.show(loadingView);

    var fetchingContact = app.request('contact:entity', id);
    $.when(fetchingContact).done(function(contact) {
      var contactView;
      if (contact !== undefined) {
        contactView = new ShowContact({
          model: contact
        });

        contactView.on('contact:edit', function(contact) {
          app.trigger('contact:edit', contact.get('id'));
        });
      } else {
        contactView = new EmptyView();
      }

      app.regions.main.show(contactView);
    });
  }
};
