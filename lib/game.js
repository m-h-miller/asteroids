(function (){
  var Asteroids = window.Asteroids = ( window.Asteroids || {} );

  var Game = Asteroids.Game = function () {
    this.asteroidsArray = []

  };

  // game.Game = function (ctx) {
  //   this.asteroidsArray = []
  //   game.addAsteroids.bind(this)(ctx)
  // };

  Game.NUM_ASTEROIDS = 5;

  Game.prototype.randomPosition = function (ctx) {
    x = ctx.width * Math.random();
    y = ctx.height * Math.random();
    return [x, y];
  };

  Game.prototype.addAsteroids = function (ctx) {
    for ( i = 0; i < game.NUM_ASTEROIDS; i++ ){
      var a = new Asteroids.asteroid.Asteroid(game.randomPosition(ctx));
      this.asteroidsArray.push(a);
    }
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
