class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          'friction' : 3
      }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width
      this.height = height
      this.visibility = 255

      
      World.add(world, this.body);
    }
  }

    console.log(this.body.speed)
    if(this.body.speed < 3){
      display(){
        var pos = this.body.position;
        push ();
        translate (pos.x, pos.y);
        rotate (this.body.angle)
        rectMode(CENTER);
        fill(0,179,196);
        rect(0, 0, this.width, this.height);
        pop();
        
      }
    }
    else{
      World.remove(world, this.body)
      var pos = this.body.position
      push()
      this.visibility = this.visibility-5
      tint(0,179,196, this.visibility)
      rect( pos.x, pos.y, this.width, this.height);
      pop()
    }