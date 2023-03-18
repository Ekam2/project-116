mustacheX = 0;
mustacheY = 0;

function preload(){
    mustache = loadImage('https://i.postimg.cc/RhpLHVn0/m.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(video,0,0,300,300);
    image(mustache, mustacheX, mustacheY, 40, 40);
}

function take_snapshot(){
    save("MyFilterImage.png");
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        mustacheX = results[0].pose.nose.x-20;
        mustacheY = results[0].pose.nose.y-11;
        console.log("mustache x: "+results[0].pose.nose.x);
        console.log("mustache y: "+results[0].pose.nose.y);
    }
}

