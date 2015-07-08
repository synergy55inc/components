'use strict';

import Marionette from 'backbone.marionette';

export default Marionette.ItemView.extend({
  tagName: 'tr',
  template: app.templates['contactlistitem'],

  triggers: {
    'click td a.js-show': 'contact:show',
    'click td a.js-edit': 'contact:edit',
    'click button.js-delete': 'contact:delete'
  },

  events: {
    'click': 'highlightName'
  },

  flash: function(cssClass) {
    var $view = this.$el;
    $view.hide().toggleClass(cssClass).fadeIn(800, function() {
      setTimeout(function() {
        $view.toggleClass(cssClass);
      }, 500);
    });
  },

  highlightName: function(e) {
    this.$el.toggleClass('warning');
  },

  remove: function() {
    var self = this;
    this.$el.fadeOut(function() {
      Marionette.ItemView.prototype.remove.call(self);
    });
  }
});
