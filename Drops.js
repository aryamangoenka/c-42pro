class Drops{

    constructor(x,y){
var options={
    'friction':0.1,
    'density':1
}

this.x=x;
this.y=y;
this.body=create.circle(x,y,5,options);
World.add(world,this.body);

    }


update(){
    if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain,{x:Random(0,400), y:random(0,400)})
    }
}

display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill(255)
    ellipse(0,0,this.r);
  
    pop();
  }
}