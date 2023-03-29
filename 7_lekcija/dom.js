/* 
Querying the DOM
- get element by id
- get element by class name
- get element by tag name
- query selector
- query selector all
*/
// const listItem1 = document.getElementById("list-item-1");
// console.log(listItem1);
// const listItem2 = document.getElementById("list-item-2");
// console.log(listItem2);
// const listItem3 = document.getElementById("list-item-3");
// console.log(listItem3);

// const listItems = document.getElementsByTagName("li");
// console.log(listItems);

// const listItemsByClass = document.getElementsByClassName("list-item");
// console.log(listItemsByClass);

// const listByQuery = document.querySelectorAll("div > ul > li.list-item");
// console.log(listByQuery);

const firstListItem = document.querySelector(
  "div > ul > li.list-item#list-item-1"
);

// console.log("------------------");
/* 
DOM manipulation
- add/remove/toggle classes
- change styles
- change content within elements
- create/remove elements 
*/
const heading = document.querySelector("h1");
const person = "Artur Pushko";
const initialText = heading.innerText;
heading.innerText = `${person} ${initialText}`;

// heading.style.color = "blue";

// heading.classList.add("red");
// heading.classList.remove("demo-class");

// heading.classList.toggle("demo-class");
// heading.classList.toggle("red");

heading.classList.add("active-heading");

// document.getElementById("list-item-1").remove();
const todoList = document.getElementById("todo-list");

const newElement = document.createElement("li");
newElement.textContent = "JS created element";
newElement.id = "list-item-4";
newElement.classList.add("list-item");

// todoList.appendChild(newElement);
todoList.insertBefore(newElement, todoList.childNodes[0]);

/*
Traversing the DOM
- Find the element
- Find the parent element
*/
// parentNode
// childNodes
// console.log(todoList.childNodes[0]);
