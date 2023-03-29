function createNewListItem(text) {
  const newListItem = document.createElement("li");
  newListItem.textContent = text;
  newListItem.classList.add("list-item");

  return newListItem;
}

function createDeleteButton(newListItem) {
  const deleteButton = document.createElement("span");
  deleteButton.textContent = "x";
  deleteButton.style.color = "red";
  deleteButton.addEventListener("click", () => {
    newListItem.remove();
  });
}

window.addEventListener("load", () => {
  const submitButton = document.querySelector("button[type='submit']");
  submitButton.addEventListener("click", (evt) => {
    evt.preventDefault();

    const inputField = document.querySelector("input[type='text']");
    const inputValue = inputField.value;

    if (!inputValue) {
      return;
    }

    const newListItem = createNewListItem(text);
    const deleteButton = createDeleteButton(newListItem);
    newListItem.appendChild(deleteButton);

    const todoList = document.getElementById("todo-list");
    const firstItem = todoList.children[0];
    todoList.insertBefore(newListItem, firstItem);

    inputField.value = "";
  });

  const deleteButtonList = document.querySelectorAll("#todo-list > li > span");
  deleteButtonList.forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
      deleteButton.parentNode.remove();
    });
  });
});
