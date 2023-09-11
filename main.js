function preload()
{

}

function setup()
{
    canvas = createCanvas(350, 350);
    canvas.position(500,300);
    video = createCapture(VIDEO);
    video.size(250, 250)
    video.hide();
}

function draw()
{
    image(video, 0, 0, 640, 480);

    rect(20,1,310,20);
    fill("##03d7fc");
    stroke("#03d7fc");

    circle(10,10,20);
    circle(340,340,20);
    fill("#c603fc");
    stroke("#c603fc");

    rect(20,330,310,20);

    rect(20,330,310,20);

    rect(20,330,310,20);
}

function take_snapshot()
{
    save("trisha.png");
}