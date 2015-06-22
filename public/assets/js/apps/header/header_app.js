'use strict';
import app from 'app';
import ListController from './list/list_controller';

require('entities/header');

var API = {
  listHeader: function() {
    ListController.listHeader();
  }
};

app.commands.setHandler('set:active:header', function(name) {
  ListController.setActiveHeader(name);
});

app.vent.on('header:start', function() {
  API.listHeader();
});
