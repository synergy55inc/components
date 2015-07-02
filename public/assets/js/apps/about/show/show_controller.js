'use strict';

import app from '../../../app';
import ShowMessage from './show_view';

export default {
  showAbout: function() {
    var view = new ShowMessage();
    app.regions.main.show(view);
  }
};
