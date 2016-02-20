(function () {
  var Asteroids = window.Asteroids = ( window.Asteroids || {} );

  var gameView = Asteroids.gameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;

  };

  gameView.Moves = {
    "w": [ 0, -1],
    "a": [ -1, 0],
    "s": [ 0,  1],
    "d": [ 1,  0]
  };

  gameView.prototype.bindKeys = function () {

  };

  // gameView.View = function () {
  //   this.game = new Asteroids.Game(this.ctx);
  // };

  // var view = new gameView.View;

  gameView.prototype.start = function () {
    this.bindKeys();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  };

  gameView.prototype.animate = function (time) {
    var timeChange = time - this.lastTime;

    this.game.step(timeChange);
    this.game.draw(this.ctx);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
  };



  // gameView.start = function () {
  //   var callback = function () {
  //     view.game.moveObjects(view.ctx);
  //     view.game.checkCollisions();
  //     view.game.draw(view.ctx)
  //   }
  //   setInterval(callback, 35)
  // };





})()
