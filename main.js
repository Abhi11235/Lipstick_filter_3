function preload(){
    lipX=0;
    lipY=0;
lipstick_filter=loadImage('https://i.postimg.cc/6q565jW3/l1.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function  modelLoaded(){
console.log('PoseNet Is Initialized');
}

function draw(){
    image(video,0,0,300,300);
    image(lipstick_filter,lipX,lipY,60,60);
}

function take_snapshot()
{
save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results)
        lipX=results[0].pose.nose.x;
        lipY=results[0].pose.nose.y;
        console.log("nose x="+results[0].pose.lip.X);
        console.log("nose y="+results[0].pose.lip.Y);
    }
}