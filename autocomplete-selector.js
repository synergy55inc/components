/**
  Autocomplete selector performs operations like firing search request, selecting value, allowing multiple selections.

  This element doesnt retrieve any data for providing data for autocomplete. For providing data for autocomplete see autocomplete-dataprovider

  This element should be used as a child for autocomplete-dataprovider to get full autocomplete functionality.
  <autocomplete-dataprovider id="autocomplete" data="{{data}}">
    <autocomplete-selector multi trigger-on-focus placeholder="USA States" data="{{data}}">
    </autocomplete-selector>
  </autocomplete-dataprovider>

  @element autocomplete-selector
  @demo demo/index.html
*/
Polymer({
  is: "autocomplete-selector",
  hostAttributes: {

  },
  properties: {
    /*
     * Time after which the autocomplete fires the request
     */
    delay: {
      type: Number,
      value: 200
    },
    /*
     * Unique property in the results object used to maintain the selected items
     * 
     * This property is only used when the multi property is active
     * 
     * For Example:
     * 
     * In autocomplete result object { label : 'label', value: 'value', uid: 'uid'} to use uid this field should be 'uid'
     * 
     */
    uidField: {
      type: String,
      value: 'value'
    },
    /* Placeholder of input text */
    placeholder: {
      type: String,
      value: 'Enter few characters'
    },
    /* 
     * Selected list of items only used if multi property is active
     */
    selectedList: {
      type: Array,
      value: function () {
        return [];
      }
    },
    /*
      * Allows multiple selection in autocomplete, autocomplete doesnt close after the first selection
      * 
      */
    multi: {
      type: Boolean,
      value: false
    },
    /*
    * Fires search request on focus of the autocomplete text 
    */
    triggerOnFocus: {
      type: Boolean,
      value: false
    },
    /* 
     * Text to Show when no items are found for the input.
     */
    noItemsLabel: {
      type: String,
      value: "No Items Found"
    },
    /* 
    * Autocomplete results. should be used to bind with autcomplete-selectors data.
    * @type { Array => Object } Object Must have keys label and value
    */
    data: {
      type: Array,
      value: [],
      observer: 'show'
    },
    /* 
     * Selected value 
     */
    value: {
      type: Object,
    },
    /* 
    *  Search querytext that is currently active
    */
    searchValue: {
      type: String,
      observer: "_valueChanged",
      notify: true,
      value: null,
      reflectToAttribute: true
    },
    /* 
    *  The current value highlighted using mouse or keyboard, this is not the selected value of autocomplete. For selected value use value;
    */
    currentSelection: {
      type: Object
    },
    /*
    * Indicates search is in progress
    */
    progress: {
      type: Boolean,
      value: false
    },
    /*
    * Selection container shown
    */
    showingContainer: {
      type: Boolean,
      value: false
    },
    selectedIndex: {
      type: Number,
      value: 0,
      notify: true,
      reflectToAttribute: true,
      observer: '_highlightSelection'

    }
  },

  listeners: {
    'blur': '_clearAndClose'
  },

  _focussed: function () {
    if (!this.showingContainer && this.triggerOnFocus) {
      this.set('progress', true);
      this.set('showingContainer', true);
      var searchText = this.searchValue ? this.searchValue : '';
      this._valueChanged(searchText);
      this.$.searchBox.focus();
    }
  },

  ready: function () {
    this.$.resultList.render()
  },

  _showEmpty: function () {
    return this.data.length == 0;
  },

  attached: function () {
    var handler = function (event) {
      if (event && (event.path.indexOf(this) != -1)) {
        return;
      }
      this._clearAndClose();
    };
    this.exitHandler = handler.bind(this);
    document.addEventListener('click', this.exitHandler);
  },

  detached: function () {
    document.removeEventListener('click', this.exitHandler);
  },


  _highlightSelection: function (newValue, oldValue) {
    var newLiId = '#li' + newValue;
    var newLi = this.$$(newLiId);
    if (oldValue || oldValue === 0) {
      var oldLiId = '#li' + oldValue;
      var oldLi = this.$$(oldLiId);
      if (this.data[oldValue])
        this.data[oldValue].selected = false;
    }
    if (this.data[newValue]) {
      this.data[newValue].selected = true;
    }
    this.currentSelection = this.data[newValue];
    if (newLi) {
      newLi.classList.add("selected");
      newLi.classList.remove("unselected");
    }
    if (oldLi) {
      oldLi.classList.remove("selected");
      oldLi.classList.add("unselected");
    }
  },

  _rippleId: function (index) {
    return 'ripple' + index;
  },

  _liId: function (index) {
    return 'li' + index;
  },

  _getClass: function (index) {
    if (this.selectedIndex == index)
      return "selected";
    else
      return "unselected";
  },

  _mouseover: function (event) {
    this.set('selectedIndex', event.model.index);
  },

  _keyHandler: function (event) {
    if (event.detail.keyboardEvent.keyCode == 27) {
      this._clearAndClose();
    }
    else if (event.detail.keyboardEvent.keyCode == 38) {
      if ((this.selectedIndex) == 0) {
        return;
      }
      this.selectedIndex--;
    } else if (event.detail.keyboardEvent.keyCode == 40) {
      if (this.selectedIndex == (this.data.length - 1)) {
        return;
      }
      this.selectedIndex++;
    } else {
      this._selectCurrentItem();
    }
    this._updateScroll();
  },

  _updateScroll: function () {
    var ul = this.$$("#ul");
    var li = this.$$("#li" + this.selectedIndex);
    if (!li) {
      return;
    }
    var top = li.offsetTop,
      bot = top + li.offsetHeight,
      hgt = ul.clientHeight;
    if (top < ul.scrollTop) {
      ul.scrollTop = top;
    } else if (bot > ul.scrollTop + hgt) {
      ul.scrollTop = bot - hgt;
    }
  },

  /* 
   * Shows the autocomplete with the data provided
   * 
   * @param {Array<Object>} List of items to be shown in the autocomplete selector
   */
  show: function (data) {
    this.set('progress', false);
    var collapse = this.$.collapse
    this.selectedIndex = 0;
    this._updateScroll();
    if (this.data.length > 0 && this.data[this.selectedIndex]) {
      this.data[this.selectedIndex].selected = true;
      this.currentSelection = this.data[this.selectedIndex];
    }
    if (!collapse.opened && this.searchValue != "") {
      collapse.toggle()
      this.$.resultList.render();
    }
  },

  _valueChanged: function (text) {
    if (text === null) return;
    var collapse = this.$.collapse
    if (text != '' || this.triggerOnFocus) {
      this.debounce('search', function () {
        this.set('progress', true);
        this.set('showingContainer', true);
        /**
         * Fired when a new search is triggered. This event is used by the dataprovider to provide data
         *
         * @event autocomplete-filtered-text
         * @param {string} user input in the autocomplete
         */
        this.fire('autocomplete-filtered-text', text);
      }, this.delay);
    } else {
      this._clearAndClose();
    }
  },

  _listFilter: function (item) {
    return item.name.toLowerCase().includes(
      this.searchValue.toLowerCase()
    )
  },

  _clearAndClose: function (event) {
    let triggerOnFocus = this.triggerOnFocus;
    this.triggerOnFocus = false;
    this.set('searchValue', '');
    this.set('showingContainer', false);
    this.triggerOnFocus = triggerOnFocus;
  },


  _selectCurrentItem: function (event) {
    var item = {};
    var index = 0;
    if (event) {
      item = event.model.item;
      index = event.model.index;
    } else {
      item = this.currentSelection;
      index = this.selectedIndex;
      this.$$("#ripple" + this.selectedIndex).simulatedRipple();
    }
    this.set('value', item);
    /**
     * Fired when a new selection is made.
     *
     * @event autocomplete-select
     * @param {Object} Item selected
     */
    this.fire('autocomplete-select', this.value);
    this.$.searchBox.focus();
    this.$.selectedList.render();
    if (!this.multi) {
      this._clearAndClose();
      return;
    }
    this.selectedList.push(item);
    let set = new Set();
    var self = this;
    let unique = this.selectedList.filter(function (currentItem) {
      var isUnique = set.has(currentItem[self.uidField])
      set.add(currentItem[self.uidField])
      return !isUnique;
    })
    this.set('selectedList', unique);
  },

  _removeSelection: function (event) {
    this.splice('selectedList', event.model.index, 1);
  }
});