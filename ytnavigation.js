const contentCards = document.querySelectorAll("#content");
const searchInput = document.getElementById("search-input");

contentCards.forEach((contentCard) => {
  contentCard.style.border = "1px solid red";
});

// searchInput.style.border = "1px solid red";

console.log("Check contentCard", contentCards);
