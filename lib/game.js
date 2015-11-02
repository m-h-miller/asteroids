(function (){
  var asteroidsGame = window.Asteroids = (window.Asteroids || {});
  var game = asteroidsGame.game = {};


  game.NUM_ASTEROIDS = 5;

  game.randomPosition = function (ctx) {
    x = ctx.width * Math.random();
    y = ctx.height * Math.random();
    return [x, y];
  };

  game.addAsteroids = function (ctx) {
    for ( i = 0; i < game.NUM_ASTEROIDS; i++ ){
      var a = new asteroidsGame.asteroid.Asteroid(game.randomPosition(ctx));
      this.asteroidsArray.push(a);
    }
  };

  game.Game = function (ctx){
    this.asteroidsArray = []
    game.addAsteroids.bind(this)(ctx)
  }

  game.Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, ctx.width, ctx.height)
    this.asteroidsArray.forEach (function(asteroid) {
      asteroid.draw(ctx);
    });
  };

  game.Game.prototype.moveObjects = function (ctx) {
    this.asteroidsArray.forEach (function(asteroid) {
        asteroid.move(ctx);
    });
  };

  game.Game.prototype.checkCollisions = function () {
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
