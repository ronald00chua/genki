let color1, color2;
let lerpPos, lerpFoward;

function setup() 
{
    createCanvas(windowWidth, windowHeight);    
    color1 = color(255,0,0);
    color2 = color(0,0,255);
    lerpPos = 0;
    lerpFoward = true;
}
  
function draw() 
{
    background(0);
    
    if ( lerpFoward  ) lerpPos += 0.01;
    if ( !lerpFoward ) lerpPos -= 0.01;
    if ( lerpPos >= 1 || lerpPos <= 0) lerpFoward = !lerpFoward;
    
    let activeColor = lerpColor(color1, color2, lerpPos);
    fill(activeColor);

    let ellipseWidth = height/20;
    let ellipseHeight = height/17;
    ellipseMode(CENTER);
    ellipse( width/2 - ellipseWidth, height/2, ellipseWidth, ellipseHeight );
    ellipse( width/2 + ellipseWidth, height/2, ellipseWidth, ellipseHeight );
    
}