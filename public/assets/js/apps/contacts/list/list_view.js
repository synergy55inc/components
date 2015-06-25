ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
  List.Layout = Marionette.LayoutView.extend({
    template: window["JST"]["public/assets/js/templates/contactlistlayout.html"],

    regions: {
      panelRegion: "#panel-region",
      contactsRegion: "#contacts-region"
    }
  });

  List.Panel = Marionette.ItemView.extend({
    template: window["JST"]["public/assets/js/templates/contactlistpanel.html"],

    triggers: {
      "click button.js-new": "contact:new"
    },

    events: {
      "submit #filter-form": "filterContacts"
    },

    ui: {
      criterion: "input.js-filter-criterion"
    },

    filterContacts: function(e){
      e.preventDefault();
      var criterion = this.$(".js-filter-criterion").val();
      this.trigger("contacts:filter", criterion);
    },

    onSetFilterCriterion: function(criterion){
      this.ui.criterion.val(criterion);
    }
  });

  List.Contact = Marionette.ItemView.extend({
    tagName: "tr",
    template: window["JST"]["public/assets/js/templates/contactlistitem.html"],

    triggers: {
      "click td a.js-show": "contact:show",
      "click td a.js-edit": "contact:edit",
      "click button.js-delete": "contact:delete"
    },

    events: {
      "click": "highlightName"
    },

    flash: function(cssClass){
      var $view = this.$el;
      $view.hide().toggleClass(cssClass).fadeIn(800, function(){
        setTimeout(function(){
          $view.toggleClass(cssClass);
        }, 500);
      });
    },

    highlightName: function(e){
      this.$el.toggleClass("warning");
    },

    remove: function(){
      var self = this;
      this.$el.fadeOut(function(){
        Marionette.ItemView.prototype.remove.call(self);
      });
    }
  });

  var NoContactsView = Marionette.ItemView.extend({
    template: window["JST"]["public/assets/js/templates/nocontacts.html"],
    tagName: "tr",
    className: "alert"
  });

  List.Contacts = Marionette.CompositeView.extend({
    tagName: "table",
    className: "table table-hover",
    template: window["JST"]["public/assets/js/templates/contactlist.html"],
    emptyView: NoContactsView,
    childView: List.Contact,
    childViewContainer: "tbody",

    initialize: function(){
      this.listenTo(this.collection, "reset", function(){
        this.attachHtml = function(collectionView, childView, index){
          collectionView.$el.append(childView.el);
        };
      });
    },

    onRenderCollection: function(){
      this.attachHtml = function(collectionView, childView, index){
        collectionView.$el.prepend(childView.el);
      };
    }
  });
});
