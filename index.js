var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", clicked);

  function clicked() {
    var buttonvalue = this.innerHTML;

    makeSound(buttonvalue);
    buttonAnimation(buttonvalue);
  }
}


document.addEventListener("keydown", pressed);

function pressed(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
}

function makeSound(key) {

  // if-else se bhi solve kar sakte the but we did it with switch
  // if(x=="w")
  // {
  //   var audio=new Audio("sounds/tom-1.mp3");
  //   audio.play();
  // }
  switch (key) {
    case "w":
      var audio = new Audio("tom-1.mp3"); //jaise har jagah audio.play() likha h, we could also write tom1.play(sabka alag name)
      audio.play();
      break;

    case "a":
      var audio = new Audio("tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("kick-bass.mp3");
      audio.play();
      break;


    default:

  }
}

function buttonAnimation(key) {
  document.querySelector("." + key).classList.add("pressed");

  setTimeout(function() {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);

}
