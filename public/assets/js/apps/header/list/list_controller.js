'use strict';

import app from '../../../app';
import ListHeader from './list_view';

export default {
  listHeader: function() {
    var links = app.request('header:entities');
    var headers = new ListHeader({ collection: links });

    headers.on('brand:clicked', function() {
      app.trigger('contacts:list');
    });

    headers.on('childview:navigate', function(childView, model) {
      var trigger = model.get('navigationTrigger');
      app.trigger(trigger);
    });

    app.regions.header.show(headers);
  },

  setActiveHeader: function(headerUrl) {
    var links = app.request('header:entities');
    var headerToSelect = links.find(function(header) {
      return header.get('url') === headerUrl;
    });
    headerToSelect.select();
    links.trigger('reset');
  }
};
