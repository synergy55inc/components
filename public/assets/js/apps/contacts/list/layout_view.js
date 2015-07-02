'use strict';
import Marionette from 'backbone.marionette';

export default Marionette.LayoutView.extend({
  template: window.JST['public/assets/js/templates/contactlistlayout.html'],

  regions: {
    panelRegion: '#panel-region',
    contactsRegion: '#contacts-region'
  }
});

