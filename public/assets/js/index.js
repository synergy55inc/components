// index.js
// Bootstrap the application
//

// Load shims.
import './config/render-shim';

// Load our Handlebars helpers (someday)
// import '../helpers/hbs-helpers';

// Setup dev environment
// import dev from './services/dev';
// dev.start();

// Start our resource cache
// import './services/resource-cache';

// Load & start our app
var app = require('./app');
app.start();
