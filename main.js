var model;
function compare(){
    navigator.mediaDevices.getUserMedia({audio:true});
    model=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/E6Trgdtpo/model.json",modelready);
}
function modelready(){
    console.log(model);
    model.classify(gotResult);
}
function gotResult(error,result){
   console.log(result);
}