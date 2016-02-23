(function (){
  var Asteroids = window.Asteroids = ( window.Asteroids || {} );

  var Game = Asteroids.Game = function () {
    this.asteroidsArray = [];

    this.addAsteroids();
  };

  Game.NUM_ASTEROIDS = 10;
  Game.DIM_X = 900;
  Game.DIM_Y = 500;

  // Game.prototype.add

  Game.prototype.addAsteroids = function () {
    for ( i = 0; i < Game.NUM_ASTEROIDS; i++ ){
      var a = new Asteroids.Asteroid({ game: this });
      this.asteroidsArray.push(a);
    }
  };

  // Game.prototype.addShip

  // Game.prototype.allObjects

  // Game.prototype.checkCollisions

  Game.prototype.randomPosition = function () {
    x = Game.DIM_X * Math.random();
    y = Game.DIM_Y * Math.random();
    return [x, y];
  };


  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y + 20);
    this.asteroidsArray.forEach (function (asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function (timeChange) {
    this.asteroidsArray.forEach (function (asteroid) {
        asteroid.move(timeChange);
    });
  };

  Game.prototype.step = function (timeChange) {
    this.moveObjects(timeChange);
  };

  Game.prototype.checkCollisions = function () {
    var that = this.asteroidsArray;
    for (var i = 0; i < that.length - 1; i++) {
      var asteroid1 = that[i];
      for (var j = i + 1; j < that.length; j++) {
        var asteroid2 = that[j];
        if (asteroid1.isCollidedWith(asteroid2)){
          console.log("COLLISION");
        }
      };
    };
  };

})();
