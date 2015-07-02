this["JST"] = this["JST"] || {};

this["JST"]["public/assets/js/templates/about.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>About this application</h1>\r\n<p>This application was designed to accompany you during your learning.</p>\r\n<p>Hopefully, it has served you well !</p>\r\n";
},"useData":true});

this["JST"]["public/assets/js/templates/conctactview.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<h1>"
    + alias3(((helper = (helper = helpers.fullName || (depth0 != null ? depth0.fullName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fullName","hash":{},"data":data}) : helper)))
    + "</h1>\r\n<a href=\"#contacts/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "/edit\" class=\"btn btn-small js-edit\">\r\n  <i class=\"icon-pencil\"></i>\r\n  Edit this contact\r\n</a>\r\n<p><strong>Avatar:</strong> "
    + alias3(((helper = (helper = helpers.avatarUrl || (depth0 != null ? depth0.avatarUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatarUrl","hash":{},"data":data}) : helper)))
    + "</p>\r\n<p><strong>Phone number:</strong> "
    + alias3(((helper = (helper = helpers.phoneNumber || (depth0 != null ? depth0.phoneNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phoneNumber","hash":{},"data":data}) : helper)))
    + "</p>\r\n";
},"useData":true});

this["JST"]["public/assets/js/templates/contactform.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<form>\r\n  <div class=\"control-group\">\r\n    <label for=\"contact-firstName\" class=\"control-label\">First name:</label>\r\n    <input id=\"contact-firstName\" name=\"firstName\" type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "\"/>\r\n  </div>\r\n  <div class=\"control-group\">\r\n    <label for=\"contact-lastName\" class=\"control-label\">Last name:</label>\r\n    <input id=\"contact-lastName\" name=\"lastName\" type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "\"/>\r\n  </div>\r\n  <div class=\"control-group\">\r\n    <label for=\"contact-phoneNumber\" class=\"control-label\">Phone number:</label>\r\n    <input id=\"contact-phoneNumber\" name=\"phoneNumber\" type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.phoneNumber || (depth0 != null ? depth0.phoneNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phoneNumber","hash":{},"data":data}) : helper)))
    + "\"/>\r\n  </div>\r\n  <button class=\"btn js-submit\">Save</button>\r\n</form>\r\n";
},"useData":true});

this["JST"]["public/assets/js/templates/contactlist.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<thead>\r\n  <tr>\r\n    <th>First Name</th>\r\n    <th>Last Name</th>\r\n    <th></th>\r\n  </tr>\r\n</thead>\r\n<tbody>\r\n</tbody>\r\n";
},"useData":true});

this["JST"]["public/assets/js/templates/contactlistitem.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<td>"
    + alias3(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "</td>\r\n<td>"
    + alias3(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "</td>\r\n<td>\r\n  <a href=\"#contacts/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-small js-show\">\r\n    <i class=\"icon-eye-open\"></i>\r\n    Show\r\n  </a>\r\n  <a href=\"#contacts/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "/edit\" class=\"btn btn-small js-edit\">\r\n    <i class=\"icon-pencil\"></i>\r\n    Edit\r\n  </a>\r\n  <button class=\"btn btn-small js-delete\">\r\n    <i class=\"icon-remove\"></i>\r\n    Delete\r\n  </button>\r\n</td>\r\n";
},"useData":true});

this["JST"]["public/assets/js/templates/contactlistlayout.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"panel-region\"></div>\r\n<div id=\"contacts-region\"></div>\r\n";
},"useData":true});

this["JST"]["public/assets/js/templates/contactlistpanel.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"btn btn-primary js-new\">New contact</button>\r\n<form id=\"filter-form\" class=\"form-search form-inline pull-right\">\r\n  <div class=\"input-append\">\r\n    <input type=\"text\" class=\"span2 search-query js-filter-criterion\">\r\n    <button type=\"submit\" class=\"btn\">Filter contacts</button>\r\n  </div>\r\n</form>\r\n";
},"useData":true});

this["JST"]["public/assets/js/templates/header.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"navbar-inner\">\r\n  <div class=\"container\">\r\n    <a class=\"brand\" href=\"#contacts\">Contact manager</a>\r\n    <div class=\"nav-collapse collapse\">\r\n      <ul class=\"nav\"></ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});

this["JST"]["public/assets/js/templates/headerlink.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <a href=\"#"
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\r\n";
},"useData":true});

this["JST"]["public/assets/js/templates/loadingview.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<h1>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n<p>"
    + alias3(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
    + "</p>\r\n<div id=\"spinner\"></div>\r\n";
},"useData":true});

this["JST"]["public/assets/js/templates/missing.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"alert alert-error\">This contact doesn't exist !</div>\r\n";
},"useData":true});

this["JST"]["public/assets/js/templates/nocontacts.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<td colspan=\"3\">No contacts to display.</td>\r\n";
},"useData":true});
