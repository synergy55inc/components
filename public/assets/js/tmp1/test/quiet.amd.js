define("/test/quiet",
  ["exports"],
  function(__exports__) {
    "use strict";
    var quiet = function() {
      return console.log("quiet!");
    }

    __exports__.quiet = quiet;
  });
