var colors, colorIndex, color1, color2, activeColor;
var lerpPos, lerpFoward;
var imgGenkiTop;

function preload()
{
    imgGenkiTop = loadImage('genki00_top.svg');
    imgGenkiTopBody = loadImage('genki00_top_body.svg');
    imgGenkiTopEyes = loadImage('genki00_top_eyes.svg');
}

function setup() 
{
    createCanvas(windowWidth, windowHeight);

    frameRate(30);

    imgGenkiTopBody.resize(height/2, 0);
    imgGenkiTopEyes.resize(height/2, 0);


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

    lerpPos += 0.05;

    if (lerpPos >= 1) {
        lerpPos = 0;
        if (colorIndex < colors.length - 1) colorIndex++;
        else colorIndex = 0;
    }

    color1 = colors[colorIndex];
    if (colorIndex == colors.length - 1) color2 = colors[0];
    else color2 = colors[colorIndex + 1];
    activeColor = lerpColor(color1, color2, lerpPos);

    push();
    translate( width/2, height/2 );
    imageMode(CENTER);
    image(imgGenkiTopBody,0,0);
    tint(activeColor);
    image(imgGenkiTopEyes,0,0);
    pop();

}

function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}