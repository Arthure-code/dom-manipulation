// The same array, walked with for...of. A title shorter than six characters
// is left out of the main list and shown on the side instead.
const MIN_LENGTH = 5;
const films = [
  "Avatar",
  "Harry Potter and the Chamber of Secrets",
  "Eat Pray Love",
  "The Hangover",
  "Coco",
  "Avengers: Endgame",
];

const filmList = document.querySelector("#film-list");
const leftOut = document.querySelector("#left-out");

for (const film of films) {
  const item = document.createElement("li");
  item.textContent = film;
  item.classList.add("list-group-item", "px-0");

  if (film.length > MIN_LENGTH) {
    item.classList.add("film-list__film");
    filmList.append(item);
  } else {
    leftOut.append(item);
  }
}
