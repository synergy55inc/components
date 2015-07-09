'use strict';

import Marionette from 'marionette';
import app from 'app';

import ShowController from './show/show_controller';

var AboutAppRouter = Marionette.AppRouter.extend({
  appRoutes: {
    'about' : 'showAbout'
  }
});

var API = {
  showAbout: function() {
    ShowController.showAbout();
    app.execute('set:active:header', 'about');
  }
};

app.on('about:show', function() {
  app.navigate('about');
  API.showAbout();
});

app.vent.on('about:start', function() {
  var router = new AboutAppRouter({
    controller: API
  });
});
