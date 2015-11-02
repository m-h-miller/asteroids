(function (){
  var asteroidsGame = window.Asteroids = (window.Asteroids || {})

  var MovingObject = asteroidsGame.MovingObject = function(pos, velocity, radius, color){
    this.pos = pos;
    this.velocity = velocity;
    this.radius = radius;
    this.color = color;
  }

  MovingObject.prototype.draw = function (ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();

      ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
      );

      ctx.fill();
  };

  MovingObject.prototype.move = function () {
    var start_pos = this.pos;
    this.pos = [start_pos[0] + this.vel[0], start_pos[1] + this.vel[1]]
  };


})()
