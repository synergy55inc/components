'use strict';

import Marionette from 'backbone.marionette';
import NoContactsView from './empty_view';
import ContactView from './contact_view';

export default Marionette.CompositeView.extend({
  tagName: 'table',
  className: 'table table-hover',
  template: templates['contactlist.tpl'],
  emptyView: NoContactsView,
  childView: ContactView,
  childViewContainer: 'tbody',

  initialize: function() {
    this.listenTo(this.collection, 'reset', function() {
      this.attachHtml = function(collectionView, childView, index) {
        collectionView.$el.append(childView.el);
      };
    });
  },

  onRenderCollection: function() {
    this.attachHtml = function(collectionView, childView, index) {
      collectionView.$el.prepend(childView.el);
    };
  }
});
