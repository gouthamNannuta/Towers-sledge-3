class Block  {
  constructor(x, y, width, height) {
      var options = {
          "restitution":0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/img2.jpg");
      this.Visiblity=2005;
      World.add(world, this.body);
    }
    display(){
     if(this.body.speed<6){
      var angle = this.body.angle;
      push();
     
     translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
       pop();
     }else{
    World.remove(world,this.body);
    push();
      this.Visiblity=this.Visiblity-5;
     tint(2005,this.Visiblity);
     pop();
    }
    }
    score(){
      if (this.Visiblity<0 && this.Visiblity>-1000){
        score++
      }
    }
}