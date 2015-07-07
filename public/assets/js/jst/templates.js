this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};

this["app"]["templates"]["about"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>About this application</h1>\r\n<p>This application was designed to accompany you during your learning.</p>\r\n<p>Hopefully, it has served you well !</p>\r\n';

}
return __p
};

this["app"]["templates"]["conctactview"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>' +
__e( fullName ) +
'</h1>\r\n<a href="#contacts/' +
__e( id ) +
'/edit" class="btn btn-small js-edit">\r\n  <i class="icon-pencil"></i>\r\n  Edit this contact\r\n</a>\r\n<p><strong>Avatar:</strong> ' +
__e( avatarUrl ) +
'</p>\r\n<p><strong>Phone number:</strong> ' +
__e( phoneNumber ) +
'</p>\r\n';

}
return __p
};

this["app"]["templates"]["contactform"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form>\r\n  <div class="control-group">\r\n    <label for="contact-firstName" class="control-label">First name:</label>\r\n    <input id="contact-firstName" name="firstName" type="text" value="' +
__e( firstName ) +
'"/>\r\n  </div>\r\n  <div class="control-group">\r\n    <label for="contact-lastName" class="control-label">Last name:</label>\r\n    <input id="contact-lastName" name="lastName" type="text" value="' +
__e( lastName ) +
'"/>\r\n  </div>\r\n  <div class="control-group">\r\n    <label for="contact-phoneNumber" class="control-label">Phone number:</label>\r\n    <input id="contact-phoneNumber" name="phoneNumber" type="text" value="' +
__e( phoneNumber ) +
'"/>\r\n  </div>\r\n  <button class="btn js-submit">Save</button>\r\n</form>\r\n';

}
return __p
};

this["app"]["templates"]["contactlist"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<thead>\r\n  <tr>\r\n    <th>First Name</th>\r\n    <th>Last Name</th>\r\n    <th></th>\r\n  </tr>\r\n</thead>\r\n<tbody>\r\n</tbody>\r\n';

}
return __p
};

this["app"]["templates"]["contactlistitem"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td>' +
__e( firstName ) +
'</td>\r\n<td>' +
__e( lastName ) +
'</td>\r\n<td>\r\n  <a href="#contacts/' +
__e( id ) +
'" class="btn btn-small js-show">\r\n    <i class="icon-eye-open"></i>\r\n    Show\r\n  </a>\r\n  <a href="#contacts/' +
__e( id ) +
'/edit" class="btn btn-small js-edit">\r\n    <i class="icon-pencil"></i>\r\n    Edit\r\n  </a>\r\n  <button class="btn btn-small js-delete">\r\n    <i class="icon-remove"></i>\r\n    Delete\r\n  </button>\r\n</td>\r\n';

}
return __p
};

this["app"]["templates"]["contactlistlayout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="panel-region"></div>\r\n<div id="contacts-region"></div>\r\n';

}
return __p
};

this["app"]["templates"]["contactlistpanel"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<button class="btn btn-primary js-new">New contact</button>\r\n<form id="filter-form" class="form-search form-inline pull-right">\r\n  <div class="input-append">\r\n    <input type="text" class="span2 search-query js-filter-criterion">\r\n    <button type="submit" class="btn">Filter contacts</button>\r\n  </div>\r\n</form>\r\n';

}
return __p
};

this["app"]["templates"]["header"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="navbar-inner">\r\n  <div class="container">\r\n    <a class="brand" href="#contacts">Contact manager</a>\r\n    <div class="nav-collapse collapse">\r\n      <ul class="nav"></ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

}
return __p
};

this["app"]["templates"]["headerlink"] = function(obj) {
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

this["app"]["templates"]["loadingview"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>' +
__e( title ) +
'</h1>\r\n<p>' +
__e( message ) +
'</p>\r\n<div id="spinner"></div>\r\n';

}
return __p
};

this["app"]["templates"]["missing"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="alert alert-error">This contact doesn\'t exist !</div>\r\n';

}
return __p
};

this["app"]["templates"]["nocontacts"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td colspan="3">No contacts to display.</td>\r\n';

}
return __p
};