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
      dismissable: {
        type: String,
        value: true
      },
      dismissClass: {
        type: String,
        computed: 'alertClass(dismissable)'
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
      },
      typeClass: {
        type: String,
        computed: 'convertClass(type)'
      }
    },

    attached: function () {
      if (this.duration > 0) {
        this.async(function () {
          this.set('show', false);
        }, this.duration);
      }
    },

    alertClass(dismiss) {
      return (dismiss) ? 'alert-dismissable' : '';
    },

    // need lowercase classname for the css, but Proper Case for message
    convertClass: function (type) {
      return type.toLowerCase();
    },

    closeAlert: function () {
      this.set('show', false);
    },

    showMessage: function (message, type, duration) {
      duration = duration || this.duration;

      this.set('message', message);
      this.set('type', type);
      this.set('show', true);

      if (duration > 0) {
        this.async(function () {
          this.set('show', false);
        }, duration);
      }
    },

    //
    // Public methods to show Alert messages, depending on type
    // --------------------------------------------------------
    showError: function (message, duration = -1) {
      this.showMessage(message, 'Error', duration);
    },

    showInfo: function (message, duration = 10000) {
      this.showMessage(message, 'Info', duration);
    },

    showSuccess: function (message, duration = 5000) {
      this.showMessage(message, 'Success', duration);
    },

    showWarning: function (message, duration = 10000) {
      this.showMessage(message, 'Warning', duration);
    }
  });
})();
