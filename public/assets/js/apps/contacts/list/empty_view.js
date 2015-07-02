'use strict';
import Marionette from 'backbone.marionette';

export default Marionette.ItemView.extend({
  template: window.JST['public/assets/js/templates/nocontacts.html'],
  tagName: 'tr',
  className: 'alert'
});
