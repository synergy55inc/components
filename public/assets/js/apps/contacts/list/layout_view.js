'use strict';
import Marionette from 'backbone.marionette';
import templates  from '../../../jst/templates';

export default Marionette.LayoutView.extend({
  template: templates['contactlistlayout'],

  regions: {
    panelRegion: '#panel-region',
    contactsRegion: '#contacts-region'
  }
});

