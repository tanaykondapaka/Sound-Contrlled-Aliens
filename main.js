function start(){

navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json',modelReady)    
}
function modelReady(){
    console.log("model ready!")
    classifier.classify(gotResult)
}
function gotResult(error,result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
        //var r = Math.floor(Math.random()*255)+1;
        //var g = Math.floor(Math.random()*255)+1;
        //var b = Math.floor(Math.random()*255)+1;

        document.getElementById("sound").innerHTML="I can hear - "+result[0].label;
        document.getElementById("accuracy").innerHTML="Accuracy - "+(result[0].confidence*100).toFixed(5)+"%";
        
        img1=document.getElementById("alien_1");
        img2=document.getElementById("alien_2");
        img3=document.getElementById("alien_3");
        img4=document.getElementById("alien_4");

        if(result[0].label=="Clap"){
            img1.src="aliens-01.gif"
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
            document.getElementById("sound").style.color="yellow"
            document.getElementById("accuracy").style.color="yellow"
            

        }
        else if(result[0].label=="Snapping"){
            img1.src="aliens-01.png"
            img2.src="aliens-02.gif"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
            document.getElementById("sound").style.color="cyan"
            document.getElementById("accuracy").style.color="cyan"

        }
        else if(result[0].label=="Bell"){
            img1.src="aliens-01.png"
            img2.src="aliens-02.png"
            img3.src="aliens-03.gif"
            img4.src="aliens-04.png"
            document.getElementById("sound").style.color="red"
            document.getElementById("accuracy").style.color="red"

        }
        else{
            img1.src="aliens-01.png"
            img2.src="aliens-02.png"
            img3.src="aliens-03.gif"
            img4.src="aliens-04.gif" 
            document.getElementById("sound").style.color="greenyellow"
            document.getElementById("accuracy").style.color="greenyellow"
        }

    }
}
