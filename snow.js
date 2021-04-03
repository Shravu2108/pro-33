class Snow {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.1,
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 20, 20, options);
        this.width = 20;
        this.height = 20;
        this.image = loadAnimation("snow4.webp","snow5.webp");
       
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(snowImage, 0, 0, this.width, this.height);
        pop();

       
      }
}