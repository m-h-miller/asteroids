(function(){
  var asteroidsGame = window.Asteroids = (window.Asteroids || {});

  var asteroid = asteroidsGame.asteroid = {};

  asteroid.Asteroid = function(pos){
    var COLOR = "brown";
    var RADIUS = 20;
    var velocity = asteroidsGame.Util.randomVec(5);


    asteroidsGame.MovingObject.call(this, pos, velocity, RADIUS, COLOR);
  };

  asteroidsGame.Util.inherits(asteroid.Asteroid, asteroidsGame.MovingObject);
})();
