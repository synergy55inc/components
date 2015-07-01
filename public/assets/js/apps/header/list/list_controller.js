import app from '../../app';
import ListHeader from './list_view';

export default {
  listHeader: function(){
    var links = {}; //ContactManager.request('header:entities');
    var headers = new ListHeader({collection: links});

    headers.on('brand:clicked', function(){
      ContactManager.trigger('contacts:list');
    });

    headers.on('childview:navigate', function(childView, model){
      var trigger = model.get('navigationTrigger');
      ContactManager.trigger(trigger);
    });

    ContactManager.regions.header.show(headers);
  },

  setActiveHeader: function(headerUrl){
    var links = ContactManager.request('header:entities');
    var headerToSelect = links.find(function(header){ return header.get('url') === headerUrl; });
    headerToSelect.select();
    links.trigger('reset');
  }
};
