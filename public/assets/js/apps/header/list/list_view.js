'use strict';
import Marionette from 'backbone.marionette';
import ItemView   from './listitem_view';

export default Marionette.CompositeView.extend({
  template: templates['header.tpl'],
  className: 'navbar navbar-inverse navbar-fixed-top',
  childView: ItemView,
  childViewContainer: 'ul',

  events: {
    'click a.brand': 'brandClicked'
  },

  brandClicked: function(e) {
    e.preventDefault();
    this.trigger('brand:clicked');
  }
});
