class Pig{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.loadPig = loadImage("pig.png");
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.loadPig,0,0,this.width, this.height);
        pop();
      }
}