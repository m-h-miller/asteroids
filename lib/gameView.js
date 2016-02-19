(function () {
  var Asteroids = window.Asteroids = ( window.Asteroids || {} );

  var gameView = Asteroids.gameView = function (game, ctx) {
    this.ctx = ctx;
    this.game = game;
  };

  gameView.View = function (){
    this.ctx.height = canvas.height;
    this.ctx.width = canvas.width;
    this.game = new Asteroids.game.Game(this.ctx);
  };

  var view = new gameView.View;


  gameView.start = function () {
    var callback = function () {
      view.game.moveObjects(view.ctx);
      view.game.checkCollisions();
      view.game.draw(view.ctx)
    }
    setInterval(callback, 35)
  };




})()
