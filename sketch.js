var ps;
var repeller;
var repeller2;
var repeller3;

var w = window;
var wX = w.innerWidth;
var wY = w.innerHeight;
var count = 0;
var positions = [];
var positions2 = [];
var positions3 = [];
var positions4 = [];
var positions5 = [];
var positions6 = [];
var positions7 = [];


function setup() {
  createCanvas(wX,wY);
  colorMode(HSB,360,100,100,100);
  ps = new ParticleSystem(createVector(width/2, 50));
  repeller = new Repeller(width/2, height/2)
  repeller2 = new Repeller2(width/2+width/5, height/2+height/6)
  repeller3 = new Repeller3(width/2-width/5, height/3)
}

function draw() {
  // background(51);
  if(count === 0) {
    ps.particles.push(new Particle(createVector(width/2, 100)));
    ps.particles.push(new Particle(createVector(width/2, 100)));
    ps.particles.push(new Particle(createVector(width/2, 100)));
    ps.particles.push(new Particle(createVector(width/2, 100)));
    ps.particles.push(new Particle(createVector(width/2, 100)));
    ps.particles.push(new Particle(createVector(width/2, 100)));
    ps.particles.push(new Particle(createVector(width/2, 100)));
  }
  count++;

  if(ps.particles.length > 0){
    var list = ps.particles;
    var ptcl = list[0];
    var ptcl2 = list[1];
    var ptcl3 = list[2];
    var ptcl4 = list[3];
    var ptcl5 = list[4];
    var ptcl6 = list[5];
    var ptcl7 = list[6];
    console.log(ptcl.position.x);
    console.log(ptcl.position.y);

    positions.push([ptcl.position.x,ptcl.position.y]);
    positions2.push([ptcl2.position.x,ptcl2.position.y]);
    positions3.push([ptcl3.position.x,ptcl3.position.y]);
    positions4.push([ptcl4.position.x,ptcl4.position.y]);
    positions5.push([ptcl5.position.x,ptcl5.position.y]);
    positions6.push([ptcl6.position.x,ptcl6.position.y]);
    positions7.push([ptcl7.position.x,ptcl7.position.y]);
    //console.log("x:%s y:%s",ps.particles[0].x ,ps.particles[0].y);
    //console.log(ps.particles[0].toString());
  }


  fill(360,100,100);
  //fill(0)
  rect(0,0, width,height);

  // Apply gravity force to all Particles
  var gravity = createVector(0,0.0141);
  ps.applyForce(gravity);

  ps.applyRepeller(repeller);
  ps.applyRepeller(repeller2);
  ps.applyRepeller(repeller3);

  repeller.display();
  repeller2.display();
  repeller3.display();
  ps.run();


if(count === 140){
  if(positions.length>2){
    for(var i = 1; i < positions.length;i++){
      strokeWeight(2);
      line(positions[i][0],positions[i][1],positions[i-1][0],positions[i-1][1]);
    }
    for(var i = 1; i < positions2.length;i++){
      strokeWeight(2);
      line(positions2[i][0],positions2[i][1],positions2[i-1][0],positions2[i-1][1]);
    }
    for(var i = 1; i < positions3.length;i++){
      strokeWeight(3);
      line(positions3[i][0],positions3[i][1],positions3[i-1][0],positions3[i-1][1]);
    }
    for(var i = 1; i < positions4.length;i++){
      strokeWeight(3);
      line(positions4[i][0],positions4[i][1],positions4[i-1][0],positions4[i-1][1]);
    }
    for(var i = 1; i < positions5.length;i++){
      strokeWeight(3);
      line(positions5[i][0],positions5[i][1],positions5[i-1][0],positions5[i-1][1]);
    }
    for(var i = 1; i < positions6.length;i++){
      strokeWeight(4);
      line(positions6[i][0],positions6[i][1],positions6[i-1][0],positions6[i-1][1]);
    }
    for(var i = 1; i < positions7.length;i++){
      strokeWeight(4);
      line(positions7[i][0],positions7[i][1],positions7[i-1][0],positions7[i-1][1]);
    }
  }
  noLoop();
}

}
