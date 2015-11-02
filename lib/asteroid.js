(function(){
  var asteroidsGame = window.Asteroids = (window.Asteroids || {});

  var asteroid = asteroidsGame.asteroid;

  var asteroid.Asteroid = function(pos){
    var COLOR = "brown";
    var RADIUS = 20;
    var velocity = Util.randomVec(5);

    asteroidsGame.Util.inherits(Asteroid, asteroidsGame.MovingObject);
    asteroidsGame.MovingObject(pos, velocity, RADIUS, COLOR);
  };

})();
