//adding event listener to all buttons


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);//remember query selector all creates an array
    
}
document.addEventListener("keydown", handleclick1); 
function handleclick1(event) {
    console.log("keyboard pressed");
    console.log(event);
    var button_text =event.key;
    switch (button_text) {
        case "w":
            var audio = new Audio('sounds/snare.mp3');  //audio object created,play method plays the sound
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/crash.mp3');  //audio object created,play method plays the sound
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');  //audio object created,play method plays the sound
            audio.play();
            break; 
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');  //audio object created,play method plays the sound
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');  //audio object created,play method plays the sound
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-4.mp3');  //audio object created,play method plays the sound
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');  //audio object created,play method plays the sound
            audio.play();
            break;


        default:
            break;
    }
}
function handleclick() {
   
    //  alert(this); this is the button object that triggered the event listsener
    //  alert(this.innerHTML); it is the inner component of the ith button(only text here)
    this.style.color = "black"; //styling added to button element
    var button_text = this.innerHTML;
    switch (button_text) {
        case "w":
            var audio = new Audio('sounds/snare.mp3');  //audio object created,play method plays the sound
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/crash.mp3');  //audio object created,play method plays the sound
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');  //audio object created,play method plays the sound
            audio.play();
            break; 
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');  //audio object created,play method plays the sound
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');  //audio object created,play method plays the sound
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-4.mp3');  //audio object created,play method plays the sound
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');  //audio object created,play method plays the sound
            audio.play();
            break;


        default:
            break;
    }

}
/*for (i=0; i<7; i++)
    document.querySelectorAll(".drum")[i].addEventListener("click",playSound);
 
//Key Press Event Listener
document.addEventListener("keydown",playSound);
 
//Funtion to play sounds
function playSound(event){
    var keyVal;
    if (event.type=="click"){
        keyVal = this.innerHTML;
    }
    if (event.type=="keydown"){
        keyVal = event.key;
    }
    switch (keyVal) {
 
        //cases
 
    }
}*/

