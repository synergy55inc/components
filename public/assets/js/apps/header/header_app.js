'use strict';
import app from '../../app';
import ListView from './list/list_view';
//var API = {
//  listHeader: function(){
//    Header.List.Controller.listHeader();
//  }
//};

//app.commands.setHandler('set:active:header', function(name) {
//  app.HeaderApp.List.Controller.setActiveHeader(name);
//});

console.log('in header, app:', app);

app.vent.on('header:start', function() {
  console.log('in header:start', ListView);

  var links = [
    { name: 'Contacts', url: 'contacts', navigationTrigger: 'contacts:list' },
    { name: 'About', url: 'about', navigationTrigger: 'about:show' }
  ]; //ContactManager.request('header:entities');
  var headers = new ListView({ collection: links });

  headers.on('brand:clicked', function() {
    app.trigger('contacts:list');
  });

  headers.on('childview:navigate', function(childView, model) {
    var trigger = model.get('navigationTrigger');
    app.trigger(trigger);
  });

  app.regions.header.show(headers);

  //API.listHeader();
});
