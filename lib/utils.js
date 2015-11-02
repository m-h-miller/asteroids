(function (){
  var asteroidsGame = window.Asteroids = (window.Asteroids || {});

  var Util = asteroidsGame.Util;

  Util.inherits = function(child, parent) {
    var Surrogate = function () {};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();

    child.prototype.constructor = child;

  };

  Util.randomVec = function(length) {
    while (var truth = false) {
      var x = 5 * Math.random();
      var y = 5 * Math.random();

      if (length*length < (x*x + y*y) ) {
        return [x, y];
      }
    }
  };

})();
