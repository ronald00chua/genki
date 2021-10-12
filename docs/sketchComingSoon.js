var colors, colorIndex;
var lerpPos, lerpFoward;

function setup() 
{
    createCanvas(windowWidth, windowHeight);

    frameRate(30);

    colors =
        [
            color(255,   0,   0),   // red
            color(255, 125,   0),   // orange
            color(255, 255,   0),   // yellow
            color(125, 255,   0),   // spring green
            color(  0, 255,   0),   // green
            color(  0, 255, 125),   // turquoise
            color(  0, 255, 255),   // cyan
            color(  0, 125, 255),   // ocean
            color(  0,   0, 255),   // blue
            color(125,   0, 255),   // violet
            color(255,   0, 255),   // magenta
            color(255,   0, 125)    // raspberry
        ]
        
    colorIndex = 0

    lerpPos = 0;
    lerpFoward = true;

    angleMode(DEGREES);
}

function draw() 
{
    background(0);

    lerpPos += 0.01;

    if (lerpPos >= 1) {
        lerpPos = 0;
        if (colorIndex < colors.length - 1) colorIndex++;
        else colorIndex = 0;
    }

    let color1 = colors[colorIndex];
    let color2;
    if (colorIndex == colors.length - 1) color2 = colors[0];
    else color2 = colors[colorIndex + 1];
    let activeColor = lerpColor(color1, color2, lerpPos);

    let ellipseWidth = height / 20;
    let ellipseHeight = height / 17;
    let glowRadius = ellipseWidth / 5;
    let glowColor = color(red(activeColor), green(activeColor), blue(activeColor), 100);

    ellipseMode(CENTER);
    noStroke();

    push();
    translate(width / 2 - ellipseWidth, height / 2);
    rotate(-5);
    fill(glowColor);
    ellipse(0, 0, ellipseWidth + glowRadius, ellipseHeight + glowRadius);
    fill(activeColor);
    ellipse(0, 0, ellipseWidth, ellipseHeight);
    pop();

    push();
    translate(width / 2 + ellipseWidth, height / 2);
    rotate(5);
    fill(glowColor);
    ellipse(0, 0, ellipseWidth + glowRadius, ellipseHeight + glowRadius);
    fill(activeColor);
    ellipse(0, 0, ellipseWidth, ellipseHeight);
    pop();
}

function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}