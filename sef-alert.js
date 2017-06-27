(function () {
  'use strict';
  Polymer({
    is: 'sef-alert',
    properties: {
      type: {
        type: String,
        value: 'Success'
      },
      show: {
        type: Object,
        value: false,
        notify: true,
        reflectToAttribute: true
      },
      duration: {
        type: Number,
        value: -1
      },
      message: {
        type: String,
        value: '',
        notify: true,
        reflectToAttribute: true
      }
    },

    showSuccess: function (message, duration) {
      duration = duration || this.duration;
      this.set('type', 'Success')
      this.set('message', message);
      this.$.alert.classList.add('alert', 'alert-success');
      this.set('show', true);
      if (this.duration > 0) {
        this.async(function () {
          this.set('show', false);
          this.$.alert.classList.remove('alert', 'alert-success');
        }, duration);
      }
    },

    closeAlert: function () {
      this.set('show', false);
    },

    showDanger: function (message, duration) {
      duration = duration || this.duration;
      this.set('type', 'Error');
      this.set('message', message);
      this.$.alert.classList.add('alert', 'alert-danger');
      this.set('show', true);
      //Do not hide if error occurs
      //if (this.duration > 0) {
      //  this.async(function() {
      //    this.set('show', false);
      //    this.$.alert.classList.remove('alert', 'alert-danger');
      //  }, duration);
      //}
    }
  });
})();
