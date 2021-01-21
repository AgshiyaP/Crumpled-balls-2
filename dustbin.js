class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:1,
          density:0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     // this.image = loadImage("dustbingreen.png")
      
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      stroke(51,204,255)
      fill(51,204,255);
     // imageMode(CENTER)
      var pos = this.body.position
     // image(this.image,pos.x,pos.y,33,33);

      rect(this.body.position.x, this.body.position.y, this.width, this. height);
    }
  };
