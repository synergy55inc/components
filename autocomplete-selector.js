    Polymer({
      is: "autocomplete-selector",
      hostAttributes:{
        
      },
      properties: {
        delay:{
          type:Number,
          value:200
        },
        placeholder:{
          type:String,
          value:'Enter few characters'
        },
        closeOnSelect:{
          type:Boolean,
          value:false
        },
        noItemsLabel:{
          type:String,
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
        searchParams:{
          type:Object,
          notify:true,
          reflectToAttribute:true,
          value:function(){
            return undefined;
          }
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
      'blur': '_clearAndClose',
      },

      ready: function() {
        this.searchValue = '';
        this.$.resultList.render()
      },

      isDataEmpty : function(){
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
          var oldLiId = 'li'+oldValue;
          var newLi = document.getElementById(newLiId);
          var oldLi = document.getElementById(oldLiId);
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
        event.target.classList.add("mouse-selected");
        event.target.classList.remove("mouse-unselected");
      },

      _mouseout:function(event){
        event.target.classList.add("mouse-unselected");
        event.target.classList.remove("mouse-selected");
      },

      keyHandler:function(event){
        if(event.detail.keyboardEvent.keyCode == 27){
          this._clearAndClose();  
        }
        else if(event.detail.keyboardEvent.keyCode == 38){
          if((this.selectedIndex) == 0 ){
            return;
          }
          this.data[this.selectedIndex].selected = false;
          this.selectedIndex--;
          this.data[this.selectedIndex].selected = true;
          this.currentSelection = this.data[this.selectedIndex];
        }else if(event.detail.keyboardEvent.keyCode == 40){
          if(this.selectedIndex == (this.data.length - 1) ){
            return;
          }
          this.data[this.selectedIndex].selected = false;
          this.selectedIndex++;
          this.data[this.selectedIndex].selected = true;
          this.currentSelection = this.data[this.selectedIndex];
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
        this.set('progress',false);
        var collapse = this.$.collapse
        this.selectedIndex = 0;
        this.updateScroll();
        if(this.data.length > 0 && this.data[this.selectedIndex])
          this.data[this.selectedIndex].selected = true;
          this.currentSelection = this.data[this.selectedIndex];
        if(!collapse.opened && this.searchValue!=""){
          collapse.toggle()
          this.$.resultList.render();
        }
      },

      _valueChanged: function(text) {
        var collapse = this.$.collapse
        if (text != '') {
          this.debounce('search',function(){
            //this.set('searchParams', [{'scrip':text}]);
            this.set('progress',true);
            this.set('showingContainer',true);
            this.fire('filter',text)
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
        this.set('searchValue', ''); 
        this.set('showingContainer',false);
        var collapse = this.$.collapse
        if (collapse.opened) {
          collapse.toggle();
        }
      },

     
      _selectCurrentItem:function(event){
        if(event){
          this.set('value', event.model.item);
        }else{
          this.set('value', this.currentSelection);
          this.querySelector("#ripple"+this.selectedIndex).simulatedRipple();
        }

        this.fire('select',this.value);

        if(this.hasAttribute('close-on-select')){
          this._clearAndClose();
        }else{
          this.$.searchBox.focus();
        }
      }
    });