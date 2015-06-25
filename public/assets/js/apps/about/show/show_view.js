ContactManager.module("AboutApp.Show", function(Show, ContactManager, Backbone, Marionette, $, _){
  Show.Message = Marionette.ItemView.extend({
    template: window["JST"]["public/assets/js/templates/about.html"]
  });
});
