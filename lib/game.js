(function (){
  var Asteroids = window.Asteroids = ( window.Asteroids || {} );

  var Game = Asteroids.Game = function () {
    this.asteroidsArray = [];

    this.addAsteroids();
  };

  Game.NUM_ASTEROIDS = 5;

  // need to refactor so i'm not passing ctx around
  Game.DIM_X = 900;
  Game.DIM_Y = 500;

  Game.prototype.addAsteroids = function () {
    for ( i = 0; i < Game.NUM_ASTEROIDS; i++ ){
      var a = new Asteroids.Asteroid({ game: this });
      this.asteroidsArray.push(a);
    }
  };

  Game.prototype.randomPosition = function () {
    x = Game.DIM_X * Math.random();
    y = Game.DIM_Y * Math.random();
    return [x, y];
  };


  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, ctx.width, ctx.height)
    this.asteroidsArray.forEach (function(asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function (ctx) {
    this.asteroidsArray.forEach (function(asteroid) {
        asteroid.move(ctx);
    });
  };

  Game.prototype.step = function (timeChange) {
    
  };

  Game.prototype.checkCollisions = function () {
    var that = this.asteroidsArray;
    for (var i = 0; i < that.length - 1; i++) {
      var asteroid1 = that[i];
      for (var j = i + 1; j < that.length; j++) {
        var asteroid2 = that[j]
        if (asteroid1.isCollidedWith(asteroid2)){
          alert("COLLISION")
        }
      };
    };
  };

})();
