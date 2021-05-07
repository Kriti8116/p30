class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
          
      }
      this.visibility= 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image= loadImage("block.png");                                 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed<3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
  
        
        image(this.image,0, 0, this.width, this.height);
        pop();
  
      }
      else{
        World.remove(world, this.body);
        push();
        this.visibility=this.visibility-5;
        tint(255, this.visibility);
        image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
    }
  };