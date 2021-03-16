class hammer {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':2,
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      
      World.add(world, this.body);
      this.body.position.x=mouseX;
      this.body.position.y=mouseY;
     
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
  