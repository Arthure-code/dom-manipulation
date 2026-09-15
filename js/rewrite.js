// Five changes made to the sample section at load, each one logged in the
// card beside it. Elements are found, removed, given attributes, created and
// inserted; nothing is written as HTML text.
const log = document.getElementById("log");
const note = (text) => { const li = document.createElement("li"); li.textContent = text; log.append(li); };

// Step 1: remove the heading of the sample.
const heading = document.querySelector("#sample h2");
heading.remove();
note("Removed the heading \"" + heading.textContent + "\".");

// Step 2: name the menu for assistive technology.
const menu = document.querySelector("nav.main-menu");
menu.setAttribute("aria-label", "Main menu");
note("Renamed the menu for assistive technology: aria-label is now \"Main menu\".");

// Step 3: the email field becomes a required email field.
const email = document.getElementById("email");
email.setAttribute("type", "email");
email.setAttribute("required", "required");
note("Turned the text field into a required email field.");

// Step 4: a Home entry, marked current, inserted before the others.
const home = document.createElement("li");
home.textContent = "Home";
home.classList.add("nav-item", "px-2", "py-1", "fw-bold", "text-success");
home.setAttribute("aria-current", "page");
document.querySelector(".main-menu ul").prepend(home);
note("Inserted \"Home\" as the first menu entry, marked as the current page.");

// Step 5: one list item per film, appended at the end of the list.
const films = [
  "Avatar",
  "Harry Potter and the Chamber of Secrets",
  "Eat Pray Love",
  "The Hangover",
  "Coco",
  "Avengers: Endgame",
];
const filmList = document.querySelector("#film-list");
for (let i = 0; i < films.length; i++) {
  const item = document.createElement("li");
  item.textContent = films[i];
  item.classList.add("list-group-item", "px-0", "film-list__film");
  filmList.append(item);
}
note("Generated " + films.length + " list items from the films array.");
