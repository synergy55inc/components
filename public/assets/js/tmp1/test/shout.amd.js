define("/test/shout",
  ["exports"],
  function(__exports__) {
    "use strict";
    var shout = function() {
      return console.log("Shout!");
    }

    __exports__.shout = shout;
  });
