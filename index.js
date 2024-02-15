var currentCardIndex = 0;
var cards = document.querySelectorAll(".new3");
const leftarrow = document.querySelector(".leftArrow");
const rightarrow = document.querySelector(".rightArrow");
const cardContainer = document.querySelector(".new4");
const tabs = document.querySelectorAll(".tab2");
const tabcontent = document.querySelectorAll(".new3");

// code for copyright text
document.getElementById("ccright").innerHTML =
  "Copyright &copy; " + new Date().getFullYear() + " - All Rights Reserved";
//code for
tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabs.forEach(function (t) {
      t.classList.remove("active");
    });
    tab.classList.add("active");
    tabcontent.forEach(function (tc) {
      tc.classList.add("hidden");
    });
    console.log(tab.id);
    document.getElementById(tab.id + "1").classList.remove("hidden");
  });
});

//function for event on left arrow click
leftarrow.addEventListener("click", function () {
  updateCard("left");
});

//for right arrow click
rightarrow.addEventListener("click", function () {
  updateCard("right");
});

//function for updating sliding tab
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
