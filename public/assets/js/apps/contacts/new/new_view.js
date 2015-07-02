'use strict';

import FormView from '../common/form_view';

export default FormView.extend({
  title: 'New Contact',

  onRender: function(){
    this.$('.js-submit').text('Create contact');
  }
});
