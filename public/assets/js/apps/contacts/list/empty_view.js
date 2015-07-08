'use strict';
import Marionette from 'backbone.marionette';

export default Marionette.ItemView.extend({
  template: 'nocontacts',
  tagName: 'tr',
  className: 'alert'
});
