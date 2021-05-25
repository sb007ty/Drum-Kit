//adding event listener to all buttons


for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);//remember query selector all creates an array 
}
function handleclick()
 {
    //  alert(this); this is the button object that triggered the event listsener
    //  alert(this.innerHTML); it is the inner component of the ith button(only text here)
    this.style.color="white"; //styling added to button element
    var audio = new Audio('sounds/snare.mp3');  //audio object created,play method plays the sound
    audio.play();
 }

