const loadText = document.querySelector('.ladowanie')
const tlo = document.querySelector('.tlo')
const bmenu = document.querySelector('.bmenu')
let button = document.getElementById
let load = 0
let okno = document.querySelector(".okno");
let show = document.querySelector(".show");
let closeButton = document.querySelector(".close-button");
let int = setInterval(blurring, 30)


function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  tlo.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
  


function toggleOkno() {
    okno.classList.toggle("show-okno");
}

function windowOnClick(event) {
    if (event.target === oknol) {
        toggleOkno();
    }
}

show.addEventListener("click", toggleOkno);
closeButton.addEventListener("click", toggleOkno);
window.addEventListener("click", windowOnClick);

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}