this["JST"] = this["JST"] || {};

this["JST"]["public/assets/js/templates/about.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>About this application</h1>\n<p>This application was designed to accompany you during your learning.</p>\n<p>Hopefully, it has served you well !</p>\n';

}
return __p
};

this["JST"]["public/assets/js/templates/contactlist.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<thead>\r\n  <tr>\r\n    <th>First Name</th>\r\n    <th>Last Name</th>\r\n    <th></th>\r\n  </tr>\r\n</thead>\r\n<tbody>\r\n</tbody>\r\n';

}
return __p
};

this["JST"]["public/assets/js/templates/contactlistpanel.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<button class="btn btn-primary js-new">New contact</button>\r\n<form id="filter-form" class="form-search form-inline pull-right">\r\n  <div class="input-append">\r\n    <input type="text" class="span2 search-query js-filter-criterion">\r\n    <button type="submit" class="btn">Filter contacts</button>\r\n  </div>\r\n</form>\r\n';

}
return __p
};

this["JST"]["public/assets/js/templates/header.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="navbar-inner">\r\n  <div class="container">\r\n    <a class="brand" href="#contacts">Contact manager</a>\r\n    <div class="nav-collapse collapse">\r\n      <ul class="nav"></ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["public/assets/js/templates/headerlink.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '      <a href="#' +
__e( url ) +
'">' +
__e( name ) +
'</a>\r\n';

}
return __p
};

this["JST"]["public/assets/js/templates/missing.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="alert alert-error">This contact doesn\'t exist !</div>\n';

}
return __p
};
