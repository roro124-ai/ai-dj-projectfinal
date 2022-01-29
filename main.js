song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;



function preload(){
    song1=loadSound("rapstar.mp3");
    song2=loadSound("yummy.mp3");
    
}
function modelLoaded(){
    console.log("poseNet has been loaded")
}
function play(){

}

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
 video.hide();
 poseNet=ml5.poseNet(video, modelLoaded);
 poseNet.on('pose' ,gotPoses);
    }

    function draw(){
        image(video ,0,0,600,400);
        fill("#ff0000");
stroke("#ff0000");

song1==song.isPlaying();
song2==song.isPlaying();

if(scoreLeftWrist>0.2){
    circle(LeftWristX,LeftWristY,25);
song2.stop();
if(song1_status==false){
    song1.play();
    document.getElementById("song").innerHTML="playing Rapstar"
}
}
if(scoreRightWrist>0.2){
    circle(rightWristX,rightWristY,25);
song2.play();
if(song1_status==false){
    song1.stop();
    document.getElementById("song").innerHTML="playing Yummy"
}
}



        
    }

    function gotPoses(results){
        
        scoreLeftWrist=results[0].pose.keypoints[9].score;
scoreRightWrist=results[0].pose.keypoints[10].score;
        
        if(results.length>0){
            console.log(results);
            
            leftWristX=results[0].pose.leftWrist.x;
            leftWristY=results[0].pose.leftWrist.y;
            console.log("leftWristX = "+ leftWristX + "leftWristY=" + leftWristY);
            
            rightWristX=results[0].pose.rightWristX;
            rightWristY=results[0].pose.rightWristY;
            console.log("rightWristX=" + rightWristX + "rightWristY=" + rightWristY);

        }}