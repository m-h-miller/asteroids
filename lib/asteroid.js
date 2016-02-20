(function(){
  var Asteroids = window.Asteroids = ( window.Asteroids || {} );

  var Asteroid = Asteroids.Asteroid = function ( options ) {
    options.color = Asteroid.COLOR;
    options.radius = Asteroid.RADIUS;
    options.pos = options.pos || options.game.randomPosition();
    options.vel = options.vel || Asteroids.Util.randomVec(Asteroid.SPEED);

    Asteroids.MovingObject.call(this, options);
  };

  Asteroid.COLOR = "#FFF";
  Asteroid.RADIUS = 20;
  Asteroid.SPEED = 4;

  // asteroid.Asteroid = function (pos) {
  //   // var COLOR = "brown",
  //       // RADIUS = 20,
  //
  //   Asteroids.MovingObject.call(this, pos, velocity, RADIUS, COLOR);
  // };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

})();
