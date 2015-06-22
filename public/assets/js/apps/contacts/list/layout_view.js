'use strict';
import Marionette from 'marionette';

export default Marionette.LayoutView.extend({
  template: 'contactlistlayout',

  regions: {
    panelRegion: '#panel-region',
    contactsRegion: '#contacts-region'
  }
});

