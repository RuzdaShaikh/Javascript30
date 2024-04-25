/* https://www.geeksforgeeks.org/design-a-drum-kit-web-app-using-javascript/ */

document.addEventListener("keypress", function(event) {
  sound(event.key) 
  animation(event.key)
})

function sound(key) {
  switch(key) {
    case "a":
      const sound1 = new Audio("clap.wav")
      sound1.play()
      break;

    case "s":
      const sound2 = new Audio("hihat.wav")
      sound2.play()
      break;

    case "d":
      const sound3 = new Audio("kick.wav")
      sound3.play()
      break;

    case "f":
      const sound4 = new Audio("openhat.wav")
      sound4.play()
      break;

    case "g":
      const sound5 = new Audio("boom.wav")
      sound5.play()
      break;

    case "h":
      const sound6 = new Audio("ride.wav")
      sound6.play()
      break;

    case "j":
      const sound7 = new Audio("snare.wav")
      sound7.play()
      break;

    case "k":
      const sound8 = new Audio("tom.wav")
      sound8.play()
      break;

    case "l":
      const sound9 = new Audio("tink.wav")
      sound9.play()
      break;

    default: console.log(key);
  }
}

function animation(currentKey) {
  const activeButton = document.querySelector("." + currentKey)

  activeButton.classList.add("animation")
  setTimeout (function() {
    activeButton.classList.remove("animation")
  }, 150)
}
