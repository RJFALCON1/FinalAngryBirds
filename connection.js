class Connection {
  constructor(x, y) {
    var properties = {
      pointA: x,
      bodyB: y,
      stiffness: 0.04,
      length: 10,
    };
    this.connection = Constraint.create(properties);
    World.add(world, this.connection);
    this.sling1 = loadImage("sling1.png");
    this.sling2 = loadImage("sling2.png");
    this.sling3 = loadImage("sling3.png");
  }
  display() {
    image(this.sling1, 160, 110, 40, 120);
    image(this.sling2, 130, 110, 40, 80);
    if (this.connection.bodyB != null) {
      var a = this.connection.pointA;
      var b = this.connection.bodyB.position;
      line(a.x, a.y, b.x, b.y);
    }
  }
  constraintBreak() {
    this.connection.bodyB = null;
  }
}                                                                                                      