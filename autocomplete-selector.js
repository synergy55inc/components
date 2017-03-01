    Polymer({
      is: "autocomplete-selector",
      hostAttributes:{
        
      },
      properties: {
        delay:{
          type:Number,
          value:200
        },
        uidField : {
          type : String,
          value : 'value'
        },
        placeholder:{
          type:String,
          value:'Enter few characters'
        },
        selectedList : {
          type : Array,
          value : function() {
            return [];
          }
        },
        renderData : {
          type : Array,
          value : function() {

          }
        },
        closeOnSelect:{
          type:Boolean,
          value:false
        },
        triggerOnFocus : {
          type : Boolean,
          value : false
        },
        noItemsLabel:{
          type: String,
          value:"No Items Found"
        },
        data: {
          type:Array,
          value:[],
          observer:'show'
        },
        label: String,
        value: {
          type: Object,
        },
        searchValue: {
          type: String,
          observer: "_valueChanged",
          notify:true,
          value : null,
          reflectToAttribute:true
        },
        currentSelection:{
          type:Object
        },
        progress:{
          type:Boolean,
          value:false
        },
        showingContainer:{
          type:Boolean,
          value:false
        },
        selectedIndex:{
          type:Number,
          value:0,
          notify:true,
          reflectToAttribute:true,
          observer:'_highlightSelection'

        }
      },

      listeners: {
        'blur': '_clearAndClose'
      },

      _focussed : function() {
        if(!this.showingContainer && this.triggerOnFocus) {
          this.set('progress',true);
          this.set('showingContainer', true);
          var searchText = this.searchValue ? this.searchValue : '';
          this._valueChanged(searchText);
          this.$.searchBox.focus();
        }
      },

      ready: function() {
        this.$.resultList.render()
      },

      showEmpty : function(){
        return this.data.length == 0;
      },

      attached: function() {
        var handler = function(event){
          if(event && (event.path.indexOf(this)!=-1)){
            return;  
          }
          this._clearAndClose();
        };
        this.exitHandler = handler.bind(this);
        document.addEventListener('click',this.exitHandler);
      },

      detached: function() {
        document.removeEventListener('click',this.exitHandler);
      },


      _highlightSelection:function(newValue,oldValue){
          var newLiId = 'li'+newValue; 
          var newLi = document.getElementById(newLiId);
          if(oldValue || oldValue === 0) {
            var oldLiId = 'li'+oldValue;
            var oldLi = document.getElementById(oldLiId);
            if(this.data[oldValue])
               this.data[oldValue].selected = false;
          }
          if(this.data[newValue]) {
            this.data[newValue].selected = true;
          }
          this.currentSelection = this.data[newValue];
          if(newLi){
           newLi.classList.add("selected");
           newLi.classList.remove("unselected"); 
          }
          if(oldLi){
            oldLi.classList.remove("selected");
            oldLi.classList.add("unselected");
          }
      },

      rippleId:function(index){
        return 'ripple'+index;
      },

      liId:function(index){
        return 'li'+index;
      },

      getClass:function(index){
        if(this.selectedIndex == index)
          return "selected";
        else
          return "unselected";
      },

      _mouseover:function(event){
        this.set('selectedIndex',event.model.index);
      },

      keyHandler:function(event){
        if(event.detail.keyboardEvent.keyCode == 27){
          this._clearAndClose();  
        }
        else if(event.detail.keyboardEvent.keyCode == 38){
          if((this.selectedIndex) == 0 ){
            return;
          }
          this.selectedIndex--;
        }else if(event.detail.keyboardEvent.keyCode == 40){
          if(this.selectedIndex == (this.data.length - 1) ){
            return;
          }
          this.selectedIndex++;
        }else{
          this._selectCurrentItem();
        }
        this.updateScroll();
      },

      updateScroll :function() {
        var ul = document.getElementById("ul");
        var li = document.getElementById("li"+this.selectedIndex);
        if(!li){
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

    show:function(data){
        this.set('progress', false);
        var collapse = this.$.collapse
        this.selectedIndex = 0;
        this.updateScroll();
        if(this.data.length > 0 && this.data[this.selectedIndex]) {
          this.data[this.selectedIndex].selected = true;
          this.currentSelection = this.data[this.selectedIndex];
        }
        if(!collapse.opened && this.searchValue!=""){
          collapse.toggle()
          this.$.resultList.render();
        }
      },

      _valueChanged: function(text) {
        if(text === null) return;
        var collapse = this.$.collapse
        if (text != '' || this.triggerOnFocus) {
          this.debounce('search',function(){
            this.set('progress',true);
            this.set('showingContainer',true);
            this.fire('autocomplete-filtered-text',text);
          },this.delay);
        } else{
          this._clearAndClose();
        }
      },

      _listFilter: function(item) {
        return item.name.toLowerCase().includes(
          this.searchValue.toLowerCase()
        )
      },

      //Click event from the body.
      _clearAndClose:function(event){
        this.set('showingContainer',false);
      },

     
      _selectCurrentItem:function(event){
        var item = {};
        var index = 0;
        if(event){
          item = event.model.item;
          index = event.model.index;
        }else{
          item = this.currentSelection;
          index = this.selectedIndex;
          this.querySelector("#ripple"+this.selectedIndex).simulatedRipple();
        }
        this.set('value', item);
        this.fire('select',this.value);
        this.$.searchBox.focus();
        this.$.selectedList.render();
        if(this.closeOnSelect){
          this._clearAndClose();
          return;
        }
        this.selectedList.push(item);
        let set = new Set();
        var self = this;
        let unique = this.selectedList.filter(function(currentItem) {
          var isUnique = set.has(currentItem[self.uidField])
          set.add(currentItem[self.uidField])
          return !isUnique;
        })
        this.set('selectedList', unique);
      },

      _removeSelection : function(event) {
        this.splice('selectedList', event.model.index, 1);
      }
    });