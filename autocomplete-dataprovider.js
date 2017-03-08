/**
 * Provides data for autocomplete.
 * 
 * This element is seperated from autocomplete selector so it can deal with how data is retrieved by implementing filter method,  So data can be retireved by sync, async or cached irrespective of how autocomplete works
 * 
 * This element listens for  autocomplete-filtered-text event from the autocomplete-selector,
 * 
 */
Polymer({
      is: "autocomplete-dataprovider",
      hostAttributes:{
        
      },
      properties: {
        /* 
         * Autocomplete results. should be used to bind with autcomplete-selectors data.
         * @type { Array => Object } Object Must have keys label and value
         */
        data : {
            type : Array,
            notify : true,
        },
        /*
         * Retrieves data asynchronously
         * 
         * If this property is true, then filter method should return a promise which resolves to Array
         * else it can return Array of Objects
         */ 
        remote : {
            type : Boolean,
            notify : true,
            value : false
        }
      },
      listeners : {
          'autocomplete-filtered-text' :  '_getData'
      },
      _getData : function(event) {
          var self = this;
          var result = this.filter(event);
          if(!this.remote) {
              self.set('data', result)
          } else {
              result.then(function(response) {
                self.set('data', response);
            });
          }
      },
      /*
        * Allows customization of retrieving data.
        * Example:
        * document.querySelector('autocomplete-dataprovider').filter = function() { console.log('Implement custom logic')}
        * 
        * @returns {Promise<Array> | Array} depeneding on the remote property
        * 
        * 
        */
      filter : function(event) {
          var text = event.detail.toUpperCase();
          var states = [
                {"label": "Alabama", "value": "AL"},
                {"label": "Alaska", "value": "AK"},
                {"label": "American Samoa", "value": "AS"},
                {"label": "Arizona", "value": "AZ"},
                {"label": "Arkansas", "value": "AR"},
                {"label": "California", "value": "CA"},
                {"label": "Colorado", "value": "CO"},
                {"label": "Connecticut", "value": "CT"},
                {"label": "Delaware", "value": "DE"},
                {"label": "District Of Columbia", "value": "DC"},
                {"label": "Federated States Of Micronesia", "value": "FM"},
                {"label": "Florida", "value": "FL"},
                {"label": "Georgia", "value": "GA"},
                {"label": "Guam", "value": "GU"},
                {"label": "Hawaii", "value": "HI"},
                {"label": "Idaho", "value": "ID"},
                {"label": "Illinois", "value": "IL"},
                {"label": "Indiana", "value": "IN"},
                {"label": "Iowa", "value": "IA"},
                {"label": "Kansas", "value": "KS"},
                {"label": "Kentucky", "value": "KY"},
                {"label": "Louisiana", "value": "LA"},
                {"label": "Maine", "value": "ME"},
                {"label": "Marshall Islands", "value": "MH"},
                {"label": "Maryland", "value": "MD"},
                {"label": "Massachusetts", "value": "MA"},
                {"label": "Michigan", "value": "MI"},
                {"label": "Minnesota", "value": "MN"},
                {"label": "Mississippi", "value": "MS"},
                {"label": "Missouri", "value": "MO"},
                {"label": "Montana", "value": "MT"},
                {"label": "Nebraska", "value": "NE"},
                {"label": "Nevada", "value": "NV"},
                {"label": "New Hampshire", "value": "NH"},
                {"label": "New Jersey", "value": "NJ"},
                {"label": "New Mexico", "value": "NM"},
                {"label": "New York", "value": "NY"},
                {"label": "North Carolina", "value": "NC"},
                {"label": "North Dakota", "value": "ND"},
                {"label": "Northern Mariana Islands", "value": "MP"},
                {"label": "Ohio", "value": "OH"},
                {"label": "Oklahoma", "value": "OK"},
                {"label": "Oregon", "value": "OR"},
                {"label": "Palau", "value": "PW"},
                {"label": "Pennsylvania", "value": "PA"},
                {"label": "Puerto Rico", "value": "PR"},
                {"label": "Rhode Island", "value": "RI"},
                {"label": "South Carolina", "value": "SC"},
                {"label": "South Dakota", "value": "SD"},
                {"label": "Tennessee", "value": "TN"},
                {"label": "Texas", "value": "TX"},
                {"label": "Utah", "value": "UT"},
                {"label": "Vermont", "value": "VT"},
                {"label": "Virgin Islands", "value": "VI"},
                {"label": "Virginia", "value": "VA"},
                {"label": "Washington", "value": "WA"},
                {"label": "West Virginia", "value": "WV"},
                {"label": "Wisconsin", "value": "WI"},
                {"label": "Wyoming", "value": "WY"}
            ];
            var results = [];
            if (text.length === 0) {
                results =  states.splice(0);
            }
            else {
                results = states.filter(function(state) {
                    return (~state.label.toUpperCase().indexOf(text)) || (~state.value.toUpperCase().indexOf(text));
                })
            }

            return  results;
      }
});