// Add an item from the text field, remove one by its number. The number the
// person sees is one-based; the list is zero-based underneath.
const list = document.getElementById("dynamic-list");
const newItem = document.getElementById("new-item");
const itemNumber = document.getElementById("item-number");
const message = document.getElementById("message");

document.getElementById("remove").addEventListener("click", removeItem);
// The add button submits the form, so Enter in the text field adds too; the
// form never navigates.
document.getElementById("list-form").addEventListener("submit", (e) => { e.preventDefault(); addItem(); });

function addItem() {
  const text = newItem.value.trim();
  if (text === "") {
    message.textContent = "Type something to add.";
    newItem.focus();
    return;
  }
  const item = document.createElement("li");
  item.textContent = text;
  item.classList.add("list-group-item");
  list.append(item);
  newItem.value = "";
  message.textContent = "";
  newItem.focus();
}

function removeItem() {
  const number = Number(itemNumber.value);
  const item = list.children[number - 1];
  if (!Number.isInteger(number) || number < 1 || !item) {
    message.textContent = list.children.length === 0
      ? "The list is empty."
      : "Give a number between 1 and " + list.children.length + ".";
    itemNumber.focus();
    return;
  }
  item.remove();
  itemNumber.value = "";
  message.textContent = "";
}
