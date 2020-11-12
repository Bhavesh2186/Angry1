class Bird {
    constructor(x,y){
        var options = {
            'restitution':0.6,
            'friction':0.5,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,80,80,options);
        this.width = 80;
        this.height = 80; 
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        pos.x=mouseX;
        pos.y=mouseY;

        push();
        translate(pos.x,pos.y);
        rotate(angle);

        strokeWeight(3);
        stroke("white");

        rectMode(CENTER);

        fill("red");
        rect(0,0,this.width,this.height);
        pop();
        
    }
};