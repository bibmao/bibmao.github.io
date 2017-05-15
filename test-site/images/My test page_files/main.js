var myHeading = document.querySelector ('h1');
myHeading.textContent = "Hello World";

var myImage = document.querySelector("img");
//
// myImage.onclick = function(){
//   var mySrc = myImage.getAttribute('src');
//   if(mySrc ==='images/firefost')
// }


var myButton = document.querySelector("button");


function setUserName(){
  var myName = prompt("Please enter your name.");
  localStorage.setItem ("name",myName);
  myHeading.textContent = "Mozilla is super cool" + myName;
}

if (!localStorage.getItem("name")){
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "mozilla is cool" + storedName ;
}

myButton.onclick = function(){
  setUserName();
}
