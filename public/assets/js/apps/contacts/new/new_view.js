ContactManager.module("ContactsApp.New", function(New, ContactManager, Backbone, Marionette, $, _){
  "use strict";
  New.Contact = ContactManager.ContactsApp.Common.Views.Form.extend({
    title: "New Contact",

    onRender: function(){
      this.$(".js-submit").text("Create contact");
    }
  });
});
