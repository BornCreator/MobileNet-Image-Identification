Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100,
    constraints:{
        facingMode:"environment"
    }
});

camera=document.getElementById("cameral");
Webcam.attach("#cameral");

function TakeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='CapturedImage' src="+data_uri+">";
    });
}
console.log("ml5 version: ",ml5.version);
classifier=ml5.imageClassifier('MobileNet',modelLoaded);
function modelLoaded(){
    console.log("MODEL HAS BEEEN LOADED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}
function checkit() {
    img = document.getElementById("CapturedImage");
    classifier.classify(img,gotResult);

}
function gotResult(error, results) {
    if (error) {
        console.log(error + " ERROR");
    } else {
        console.log(results);
        document.getElementById("ObjectName").innerHTML = results[0].label;
    }
}