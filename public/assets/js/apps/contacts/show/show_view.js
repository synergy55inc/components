'use strict';
import Marionette from 'marionette';
import EmptyView from './empty_view';

export default Marionette.ItemView.extend({
  template: 'conctactview',

  events: {
    'click a.js-edit': 'editClicked'
  },

  editClicked: function(e) {
    e.preventDefault();
    this.trigger('contact:edit', this.model);
  },

  serializeData: function() {
    var attr = this.model.attributes;
    attr.avatarUrl = attr['avatar-url'];
    return attr;
  }
});
