class rubber {
    constructor(x, y, width, height) {
      var options = {
        'restitution':0.3,
        'friction':5,
        'density':1,
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Bodies.circle(x,y,radius,[options],[maxSide]);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      
      fill("yellow");
      rect(0,0, this.width, this.height)
      pop();
      
    }
  };
  