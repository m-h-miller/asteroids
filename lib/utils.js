(function (){
  var asteroidsGame = window.Asteroids = (window.Asteroids || {});

  var Util = asteroidsGame.Util = {};

  Util.inherits = function(child, parent) {
    var Surrogate = function () {};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();

    child.prototype.constructor = child;

  };

  Util.randomVec = function(length) {
    var truth;
    while (!truth) {
      var x = 5 * Math.random();
      var y = 5 * Math.random();

      if (length*length > (x*x + y*y) ) {
        return [x, y];
      }
    }
  };

  Util.wrap = function (pos, ctx) {
    var new_pos = pos
    if (pos[0] < 0) {
      new_pos[0] = ctx.width - 1;
    } else if (pos[0] > ctx.width) {
      new_pos[0] = 1;
    } else if (pos[1] < 0) {
      new_pos[1] = ctx.height - 1;
    } else if (pos[1] > ctx.height) {
      new_pos[1] = 1;
    }
    return new_pos;
  };

})();
