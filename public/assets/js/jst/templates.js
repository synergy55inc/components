this["templates"] = this["templates"] || {};

this["templates"]["about.tpl"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<h1>About this application</h1>\r\n<p>This application was designed to accompany you during your learning.</p>\r\n<p>Hopefully, it has served you well !</p>\r\n';
return __p
};

this["templates"]["conctactview.tpl"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<h1>' +
__e( data.fullName ) +
'</h1>\r\n<a href="#contacts/' +
__e( data.id ) +
'/edit" class="btn btn-small js-edit">\r\n  <i class="icon-pencil"></i>\r\n  Edit this contact\r\n</a>\r\n<p><strong>Avatar:</strong> ' +
__e( data.avatarUrl ) +
'</p>\r\n<p><strong>Phone number:</strong> ' +
__e( data.phoneNumber ) +
'</p>\r\n';
return __p
};

this["templates"]["contactform.tpl"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<form>\r\n  <div class="control-group">\r\n    <label for="contact-firstName" class="control-label">First name:</label>\r\n    <input id="contact-firstName" name="firstName" type="text" value="' +
__e( data.firstName ) +
'"/>\r\n  </div>\r\n  <div class="control-group">\r\n    <label for="contact-lastName" class="control-label">Last name:</label>\r\n    <input id="contact-lastName" name="lastName" type="text" value="' +
__e( data.lastName ) +
'"/>\r\n  </div>\r\n  <div class="control-group">\r\n    <label for="contact-phoneNumber" class="control-label">Phone number:</label>\r\n    <input id="contact-phoneNumber" name="phoneNumber" type="text" value="' +
__e( data.phoneNumber ) +
'"/>\r\n  </div>\r\n  <button class="btn js-submit">Save</button>\r\n</form>\r\n';
return __p
};

this["templates"]["contactlist.tpl"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<thead>\r\n  <tr>\r\n    <th>First Name</th>\r\n    <th>Last Name</th>\r\n    <th></th>\r\n  </tr>\r\n</thead>\r\n<tbody>\r\n</tbody>\r\n';
return __p
};

this["templates"]["contactlistitem.tpl"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<td>' +
__e( data.firstName ) +
'</td>\r\n<td>' +
__e( data.lastName ) +
'</td>\r\n<td>\r\n  <a href="#contacts/' +
__e( data.id ) +
'" class="btn btn-small js-show">\r\n    <i class="icon-eye-open"></i>\r\n    Show\r\n  </a>\r\n  <a href="#contacts/' +
__e( data.id ) +
'/edit" class="btn btn-small js-edit">\r\n    <i class="icon-pencil"></i>\r\n    Edit\r\n  </a>\r\n  <button class="btn btn-small js-delete">\r\n    <i class="icon-remove"></i>\r\n    Delete\r\n  </button>\r\n</td>\r\n';
return __p
};

this["templates"]["contactlistlayout.tpl"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<div id="panel-region"></div>\r\n<div id="contacts-region"></div>\r\n';
return __p
};

this["templates"]["contactlistpanel.tpl"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<button class="btn btn-primary js-new">New contact</button>\r\n<form id="filter-form" class="form-search form-inline pull-right">\r\n  <div class="input-append">\r\n    <input type="text" class="span2 search-query js-filter-criterion">\r\n    <button type="submit" class="btn">Filter contacts</button>\r\n  </div>\r\n</form>\r\n';
return __p
};

this["templates"]["header.tpl"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<div class="navbar-inner">\r\n  <div class="container">\r\n    <a class="brand" href="#contacts">Contact manager</a>\r\n    <div class="nav-collapse collapse">\r\n      <ul class="nav"></ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n';
return __p
};

this["templates"]["headerlink.tpl"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '      <a href="#' +
__e( data.url ) +
'">' +
__e( data.name ) +
'</a>\r\n';
return __p
};

this["templates"]["loadingview.tpl"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<h1>' +
__e( data.title ) +
'</h1>\r\n<p>' +
__e( data.message ) +
'</p>\r\n<div id="spinner"></div>\r\n';
return __p
};

this["templates"]["missing.tpl"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<div class="alert alert-error">This contact doesn\'t exist !</div>\r\n';
return __p
};

this["templates"]["nocontacts.tpl"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<td colspan="3">No contacts to display.</td>\r\n';
return __p
};