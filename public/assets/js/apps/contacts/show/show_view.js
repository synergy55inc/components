ContactManager.module("ContactsApp.Show", function(Show, ContactManager, Backbone, Marionette, $, _){
  Show.MissingContact = Marionette.ItemView.extend({
    template: window["JST"]["public/assets/js/templates/missing.html"]
  });

  Show.Contact = Marionette.ItemView.extend({
    template: "#contact-view",

    events: {
      "click a.js-edit": "editClicked"
    },

    editClicked: function(e){
      e.preventDefault();
      this.trigger("contact:edit", this.model);
    },

    serializeData: function() {
      var attr = this.model.attributes;
      attr.avatarUrl = attr["avatar-url"];
      return attr;
    }
  });
});
