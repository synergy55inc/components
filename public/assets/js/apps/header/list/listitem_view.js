'use strict';
import Marionette from 'backbone.marionette';

export default Marionette.ItemView.extend({
  template: 'headerlink',
  tagName: 'li',

  events: { 'click a': 'navigate' },

  navigate: function(e) {
    e.preventDefault();
    this.trigger('navigate', this.model);
  },

  onRender: function() {
    if (this.model.selected) {
      // add class so Bootstrap will highlight the active entry in the navbar
      this.$el.addClass('active');
    }
  }
});
