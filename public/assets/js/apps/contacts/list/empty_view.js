'use strict';
import Marionette from 'backbone.marionette';

export default Marionette.ItemView.extend({
  template: templates['nocontacts.tpl'],
  tagName: 'tr',
  className: 'alert'
});
