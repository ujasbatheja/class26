class Chain{
    constructer(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.04
        }
        this.chain.bodyA=bodyA;
        this.chain.bodyB=bodyB;
        this.chain=Constrained.create(options);
        World.add(world,this.chain);
    }
    display(){
         var pointA=this.chain.bodyA.position;
         var pointB=this.chain.bodyB.position;
         line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}