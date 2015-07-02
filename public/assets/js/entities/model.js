'use strict';
import Backbone from 'backbone';

export default Backbone.Model.extend({
  sync: function(method, model, options) {
    if (method === 'create' || method === 'update') {
      _.defaults(options || (options = {}), {
        attrs: {
          data: model.toJSON()
        }
      });
    }
    return Backbone.Model.prototype.sync.call(this, method, model, options);
  }
});
