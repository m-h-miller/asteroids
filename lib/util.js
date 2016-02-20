(function (){
  var Asteroids = window.Asteroids = ( window.Asteroids || {} );

  var Util = Asteroids.Util = {};

  var inherits = Util.inherits = function (child, parent) {
    var Surrogate = function () {};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate ();
    child.prototype.constructor = child;
  };

  var randomVec = Util.randomVec = function (length) {
    var truth;
    while (!truth) {
      var x = 5 * Math.random();
      var y = 5 * Math.random();
      if ( length * length > (x*x + y*y) ) {
        return [ x, y ];
      }
    }
  };

  Util.wrap = function (pos) {
    var new_pos = pos
    if (pos[0] < 0) {
      new_pos[0] = Game.DIM_X - 1;
    } else if (pos[0] > GAME.DIM_X) {
      new_pos[0] = 1;
    } else if (pos[1] < 0) {
      new_pos[1] = Game.DIM_Y - 1;
    } else if (pos[1] > Game.DIM_Y) {
      new_pos[1] = 1;
    }
    return new_pos;
  };

})();
