'use strict';
import $ from 'jquery';
import Marionette from 'backbone.marionette';

import FormView from '../common/form_view';

export default FormView.extend({
  initialize: function() {
    this.title = 'Edit ' + this.model.get('fullName');
    console.log('this', this);
  },

  onRender: function() {
    if (this.options.generateTitle) {
      var $title = $('<h1>', { text: this.title });
      this.$el.prepend($title);
    }

    this.$('.js-submit').text('Update contact');
  }
});
