const YOUTUBE_URL = `${window.location.protocol}//${window.location.hostname}/`;

const contentCards = document.querySelectorAll("#content");
const searchInput = document.getElementById("search-input");

function keyboardListener() {
  console.log("Check pathname", window.location.protocol);
  document.addEventListener("keypress", (ev) => {
    const inputKey = ev.key;
    switch (inputKey) {
      case "h":
        window.location.href = `${YOUTUBE_URL}feed/history`;
        break;
      default:
        break;
    }
  });
}

contentCards.forEach((contentCard) => {
  contentCard.style.border = "1px solid red";
});

// searchInput.style.border = "1px solid red";

console.log("Check contentCard", contentCards);

keyboardListener();
