//addEventListener() sets up a function that will be called whenever the specified event is delivered to the target.
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener::event listener study link

document.querySelector("button").addEventListener("click",handleclick);  //means when 1 click on the selected button then the handleclick() function is  called(WHEN EVENT OCCURS THE FUNCTION IS CALLED)

//In function call we write handleclick(),but here brackets not given

//if brackets given then during adding event listener to the button the function will be called without clicking on the button
//in our syntax without bracket function is being sent as an argument,when click occurs then it will be called

 function handleclick()
 {
     alert("I got clicked");
 }

/*document.querySelector("button").addEventListener("click",function () //->>anonymous function
{
    alert("I got clicked");
}); */