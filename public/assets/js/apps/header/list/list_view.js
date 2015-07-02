ContactManager.module("HeaderApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
  List.Header = Marionette.ItemView.extend({
    template: window["JST"]["public/assets/js/templates/headerlink.hbs"],
    tagName: "li",

    events: {
      "click a": "navigate"
    },

    navigate: function(e){
      e.preventDefault();
      this.trigger("navigate", this.model);
    },

    onRender: function(){
      if(this.model.selected){
        // add class so Bootstrap will highlight the active entry in the navbar
        this.$el.addClass("active");
      }
    }
  });

  List.Headers = Marionette.CompositeView.extend({
    template: window["JST"]["public/assets/js/templates/header.hbs"],
    className: "navbar navbar-inverse navbar-fixed-top",
    childView: List.Header,
    childViewContainer: "ul",

    events: {
      "click a.brand": "brandClicked"
    },

    brandClicked: function(e){
      e.preventDefault();
      this.trigger("brand:clicked");
    }
  });
});
