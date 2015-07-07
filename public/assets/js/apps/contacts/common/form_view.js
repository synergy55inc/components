'use strict';

import $ from 'jquery';
import _ from 'underscore';
import Marionette from 'backbone.marionette';

import '../../../vendor/backbone.picky';
import '../../../vendor/backbone.syphon';

export default Marionette.ItemView.extend({
  template: app.templates['contactform.html'] ,

  events: {
    'click button.js-submit': 'submitClicked'
  },

  submitClicked: function(e) {
    e.preventDefault();
    console.log('submitting form');
    var data = Backbone.Syphon.serialize(this);
    this.trigger('form:submit', data);
  },

  onFormDataInvalid: function(errors) {
    var $view = this.$el;

    var clearFormErrors = function() {
      var $form = $view.find('form');
      $form.find('.help-inline.error').each(function() {
        $(this).remove();
      });
      $form.find('.control-group.error').each(function() {
        $(this).removeClass('error');
      });
    };

    var markErrors = function(value, key) {
      var $controlGroup = $view.find('#contact-' + key).parent();
      var $errorEl = $('<span>', { class: 'help-inline error', text: value });
      $controlGroup.append($errorEl).addClass('error');
    };

    clearFormErrors();
    _.each(errors, markErrors);
  }
});