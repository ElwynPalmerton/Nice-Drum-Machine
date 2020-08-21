console.log("hello");

let keys = ["a", "s", "d", "f", "j", "k", "l", ";"];

let sounds = document.getElementsByClassName("sound");
let drums = document.getElementsByClassName("drum");

for (let i = 0; i < keys.length; i++) {
  document.addEventListener("keydown", function (event) {
    if (event.key === keys[i]) {
      sounds[i].pause();
      sounds[i].currentTime = 0;
      sounds[i].play();

      drums[i].classList.add("hit");
      setTimeout(() => {
        drums[i].classList.remove("hit");
      }, 200);
    }
  });
}