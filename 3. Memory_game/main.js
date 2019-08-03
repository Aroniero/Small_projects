const cards = document.querySelectorAll(".card");

let firstCard, secondCard;
let lockBoard = false;
let hasFlippedCard = false;

function flipCard() {
  if (lockBoard) {
    return;
  }
  if (this === firstCard) {
    return;
  }

  this.classList.toggle("flip");

  if (!hasFlippedCard) {
    //THIS IS FIRST CARD
    hasFlippedCard = true;
    firstCard = this;
    // console.log(firstCard);
  } else {
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
  }
}

function checkForMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    // its MATCH
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    // console.log("Removed");
  } else {
    // ITS NOT A MATCH
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");

      lockBoard = false;
    }, 1000);
  }
}

(function shuffle() {
  cards.forEach(card => {
    let randomPas = Math.floor(Math.random() * cards.length);
    card.style.order = randomPas;
  });
})();
cards.forEach(card => card.addEventListener("click", flipCard));
