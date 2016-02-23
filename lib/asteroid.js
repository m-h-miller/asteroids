(function(){
  var Asteroids = window.Asteroids = ( window.Asteroids || {} );

  var Asteroid = Asteroids.Asteroid = function ( options ) {
    options.color = Asteroid.COLOR;
    options.radius = Asteroid.RADIUS;
    options.pos = options.pos || options.game.randomPosition();
    options.velocity = options.velocity || Asteroids.Util.randomVec(Asteroid.SPEED);

    Asteroids.MovingObject.call(this, options);
  };

  Asteroid.COLOR = "#333";
  Asteroid.RADIUS = 20;
  Asteroid.SPEED = 4;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function (otherObject) {
    if ( otherObject instanceof Asteroids.Ship ) {
      otherObject.relocate();
    }
  };

})();
