'use strict';
import Marionette from 'backbone.marionette';
import ItemView   from './listitem_view';

console.log('ItemView:', ItemView.toString());

export default Marionette.CompositeView.extend({
  template: window.JST['public/assets/js/templates/header.html'],
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
