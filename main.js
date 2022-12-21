function preload(){
    clown_nose = loadImage('https://i.postimg.cc/J4hRf76c/clown-nose.jpg')

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);


}

function draw(){a
    Image(video, 0, 0, 300, 300);
    Image(clown_nose, noseX, noseY, 30, 30)

}

function take_snapshot(){
    save('MyfilterImage.gif')
}
    
