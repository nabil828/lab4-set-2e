const cards = document.querySelectorAll(".card")

let firstCardImg = undefined
let secondCardImg = undefined


const onCardClick = function (e) {
  if (!firstCardImg)
    firstCardImg = this.querySelector("img")
  else
    secondCardImg = this.querySelector("img")


  this.classList.toggle("flip")

  if (firstCardImg && secondCardImg)
    if (firstCardImg.src == secondCardImg.src) {
      console.log("match");
      firstCardImg.parentNode.removeEventListener("click", onCardClick)
      secondCardImg.parentNode.removeEventListener("click", onCardClick)
    }
    else {
      console.log("no match");
      setTimeout((arg) => {
        firstCardImg.parentNode.classList.toggle("flip")
        secondCardImg.parentNode.classList.toggle("flip")
      }, 1000)
    }
}
cards.forEach((arg) => {
  arg.addEventListener("click", onCardClick)
})