var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fish2.png'){
        myImage.setAttribute('src','images/shuk.png');
    } else {
        myImage.setAttribute('src','images/fish2.png')
    }

}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Рыбалка в Бресте, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Рыбалка в Бресте, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}