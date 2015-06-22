ContactManager.module("AboutApp.Show", function(Show, ContactManager, Backbone, Marionette, $, _){
  "use strict";
  Show.Message = Marionette.ItemView.extend({
    template: "#about-message"
  });
});
