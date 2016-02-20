(function (){
  var asteroidsGame = window.Asteroids = ( window.Asteroids || {} )

  var MovingObject = Asteroids.MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
  };

  MovingObject.prototype.draw = function (ctx) {
      ctx.fillStyle = this.color;

      ctx.beginPath();
      ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        true
      );

      ctx.fill();
  };

  MovingObject.prototype.move = function (ctx) {
    var start_pos = this.pos;
    this.pos = [start_pos[0] + this.velocity[0], start_pos[1] + this.velocity[1]];
    this.pos = asteroidsGame.Util.wrap(this.pos, ctx);
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var dist;
    var deltaX = +(this.pos[0] - otherObject.pos[0]);
    var deltaY = +(this.pos[1] - otherObject.pos[1]);
    dist = Math.pow((Math.pow(deltaX, 2) + Math.pow(deltaY, 2)), 0.5);
    if (dist < this.radius + otherObject.radius) {
      return true;
    }
  };

})()
