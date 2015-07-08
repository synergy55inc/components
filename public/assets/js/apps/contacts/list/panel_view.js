'use strict';

import Marionette from 'backbone.marionette';

export default Marionette.ItemView.extend({
  template: templates['contactlistpanel.tpl'],

  triggers: {
    'click button.js-new': 'contact:new'
  },

  events: {
    'submit #filter-form': 'filterContacts'
  },

  ui: {
    criterion: 'input.js-filter-criterion'
  },

  filterContacts: function(e) {
    e.preventDefault();
    var criterion = this.$('.js-filter-criterion').val();
    this.trigger('contacts:filter', criterion);
  },

  onSetFilterCriterion: function(criterion) {
    this.ui.criterion.val(criterion);
  }
});
