ContactManager.module("AboutApp.Show", function(Show, ContactManager, Backbone, Marionette, $, _){
  "use strict";
  Show.Controller = {
    showAbout: function(){
      var view = new Show.Message();
      ContactManager.regions.main.show(view);
    }
  };
});
