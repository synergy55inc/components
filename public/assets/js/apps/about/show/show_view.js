'use strict';

import Marionette from 'backbone.marionette';
import templates  from '../../../jst/templates';

export default Marionette.ItemView.extend({
  template: templates['about']
});
