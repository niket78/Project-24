

if(keyCode === 32) {
    arrow.shoot(playerArcher.body.angle);

}

shoot(archerAngle)  {
    var velocity = p5.Vector.fromAngle(archerAngle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {x: velocity.x, y: velocity.y});
}

Matter.Body.setAngle(this.body,-PI/2);