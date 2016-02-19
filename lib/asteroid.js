(function(){
  var Asteroids = window.Asteroids = ( window.Asteroids || {} );

  var asteroid = Asteroids.asteroid = {};

  asteroid.Asteroid = function (pos) {
    var COLOR = "brown",
        RADIUS = 20,
        velocity = Asteroids.Util.randomVec(5);
        
    Asteroids.MovingObject.call(this, pos, velocity, RADIUS, COLOR);
  };

  Asteroids.Util.inherits(asteroid.Asteroid, Asteroids.MovingObject);
})();
