'use strict';
import Marionette from 'backbone.marionette';

export default Marionette.LayoutView.extend({
  template: templates['contactlistlayout'],

  regions: {
    panelRegion: '#panel-region',
    contactsRegion: '#contacts-region'
  }
});

