(function (){
  var asteroidsGame = window.Asteroids = (window.Asteroids || {});
  var game = asteroidsGame.game;

  var DIM = {
    "x" : 800;
    "y" : 600
  };

  var NUM_ASTEROIDS = 5;

  var asteroidsArray = [];

  var addAsteroids = function () {
    for ( i = 0; i < NUM_ASTEROIDS; i++ ){
      var a = asteroidsGame.asteroid new Asteroid(randomPosition);
      asteroidsArray.push(a);
    }
  };

  var randomPosition = function () {
    x = DIM["x"] * Math.random();
    y = DIM["y"] * Math.random();
    return [x, y];
  };



})();
