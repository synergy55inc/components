this["JST"] = this["JST"] || {};

this["JST"]["public/assets/js/templates/contactlist.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<thead>\r\n  <tr>\r\n    <th>First Name</th>\r\n    <th>Last Name</th>\r\n    <th></th>\r\n  </tr>\r\n</thead>\r\n<tbody>\r\n</tbody>\r\n';

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