//
// render
// Overrides the render to support string-based templates
// pulled from the `templates` module, which are the
// pre-compiled JST templates.
//
//
'use strict';

import * as Marionette from 'backbone.marionette';
import * as templates from 'templates';

Marionette.Renderer.render = function(template, data) {
  var templateFunc;
  if (!template) {
    throw new Error('Cannot render the template since its false, null or undefined.',
                    'TemplateNotFoundError');
  }

  if (typeof template === 'function') {
    templateFunc = template;
  } else if (typeof template === 'string') {
    templateFunc = templates.JST[template];
  }

  if (!templateFunc) {
    throw new Error('Cannot render the view because the template was not found.');
  }

  return templateFunc(data);
};
