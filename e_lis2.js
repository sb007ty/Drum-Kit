//adding event listener to all buttons


for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);//remember query selector all creates an array 
}
function handleclick()
 {
     alert("I got clicked");
 }