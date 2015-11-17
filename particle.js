
var Particle = function(position) {
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.get();
  this.lifespan = 255.0;
  this.linie = [];
  console.log(position.get());
  // this.positionOld = position;

  this.run = function() {
    this.update();
    this.display();
  };

  this.applyForce = function(f) {
    this.acceleration.add(f);
  };


  // Method to update position
  this.update = function(){
    // this.positionOld.sub(this.acceleration);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  };

  // Method to display
  this.display = function() {
    ellipse(this.position.x, this.position.y, 3, 3);
    // line(this.positionOld.x, this.positionOld.y, this.position.x,this.position.y);
  };

  // Is the particle still useful?
  this.isDead = function(){
    if (this.lifespan < 0.0) {
        return true;
    } else {
      return false;
    }
  };
}
