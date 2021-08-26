

if(move ==="UP" && computerArcher.body.angle < 1.77) {
    angleValue = 0.1;
}else{

    angleValue = -0.1;
}


if(move === "DOWN" && computerArcher.body.ange > 1.47)  {
    angleValue = -0.1;
}else{

    angleValue = 0.1;
}