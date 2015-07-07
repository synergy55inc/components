'use strict';
import Marionette from 'backbone.marionette';

export default Marionette.ItemView.extend({
  template: app.templates['nocontacts.html'],
  tagName: 'tr',
  className: 'alert'
});
