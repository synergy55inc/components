'use strict';
import Marionette from 'backbone.marionette';

export default Marionette.LayoutView.extend({
  template: templates['contactlistlayout.tpl'],

  regions: {
    panelRegion: '#panel-region',
    contactsRegion: '#contacts-region'
  }
});

