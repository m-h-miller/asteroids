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
    var deg = 2 * Math.PI * Math.random();
    return scale([Math.sin(deg), Math.cos(deg)], length);
  };

  var scale = Util.scale = function (vec, m) {
    return [vec[0] * m, vec[1] * m];
  };

  Util.wrap = function (pos) {
    var new_pos = pos
    if (pos[0] < 0) {
      new_pos[0] = Asteroids.Game.DIM_X - 1;
    } else if (pos[0] > Asteroids.Game.DIM_X) {
      new_pos[0] = 1;
    } else if (pos[1] < 0) {
      new_pos[1] = Asteroids.Game.DIM_Y - 1;
    } else if (pos[1] > Asteroids.Game.DIM_Y) {
      new_pos[1] = 1;
    }
    return new_pos;
  };

})();
