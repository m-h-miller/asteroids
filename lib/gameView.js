(function () {
  var asteroidsGame = window.Asteroids = (window.Asteroids || {});
  var gameView = asteroidsGame.gameView = {};

  gameView.View = function (){
    this.ctx = window.canvasEl.getContext("2d");
    this.ctx.height = canvasEl.height;
    this.ctx.width = canvasEl.width;
    this.game = new asteroidsGame.game.Game(this.ctx);
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
