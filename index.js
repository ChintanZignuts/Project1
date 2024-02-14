var currentCardIndex = 0;
var cards = document.querySelectorAll(".new3");
const leftarrow = document.querySelector(".leftArrow");
const rightarrow = document.querySelector(".rightArrow");
const cardContainer = document.querySelector(".new4");
const tabs = document.querySelectorAll(".tab2");

// code for copyright text
document.getElementById("ccright").innerHTML =
  "Copyright &copy; " + new Date().getFullYear() + " - All Rights Reserved";

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabs.forEach(function (t) {
      t.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

leftarrow.addEventListener("click", function () {
  updateCard("left");
});

rightarrow.addEventListener("click", function () {
  updateCard("right");
});

function updateCard(direction) {
  cardContainer.classList.add("sliding"); // Apply the sliding class
  setTimeout(function () {
    cards[currentCardIndex].classList.add("hidden");

    if (direction === "left") {
      currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    } else if (direction === "right") {
      currentCardIndex = (currentCardIndex + 1) % cards.length;
    }

    cards[currentCardIndex].classList.remove("hidden");
    cardContainer.classList.remove("sliding"); // Remove the sliding class

    // Update the active tab
    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });
    tabs[currentCardIndex].classList.add("active");
  }, 300);
}

let currentIndex = 0;

function rotateCards(direction) {
  console.log("card");
  const reviewCards = document.querySelectorAll(".reviewcard");
  const totalCards = reviewCards.length;

  if (direction === "right") {
    currentIndex = (currentIndex + 1) % totalCards;
  } else if (direction === "left") {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  }

  reviewCards.forEach((card, index) => {
    const rotation = (index - currentIndex) * 120; // Adjust the rotation angle as needed
    card.style.transform = `rotateY(${rotation}deg)`;
  });
}
console.log(document.querySelector(".leftarrow"));
document.querySelector(".leftarrow").addEventListener("click", function () {
  rotateCards("left");
});

document.querySelector(".rightarrow").addEventListener("click", function () {
  rotateCards("right");
});
