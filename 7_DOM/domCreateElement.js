const parent = document.querySelector(".parent");

console.log(parent);
console.log(parent.children);
console.log(parent.children[0]);

// for loops
for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}

const dayOne = document.querySelector(".day"); //

console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.parentElement.children);

console.log(parent.child);

// Adding Text Using DOM

const div = document.createElement("div");
div.className = "day";
div.id = Math.floor(Math.random() * 1000);
// div.innerHTML = 'Friday';
div.setAttribute("title", "generated div");
div.style.color = "white";
div.style.backgroundColor = "yellowgreen";

// Optimised Approach
const addText = document.createTextNode("Friday");
div.appendChild(addText);

document.body.appendChild(div);

function createNewDiv(dayName) {
  const div = document.createElement("div");
  div.className = "day";
  div.id = Math.floor(Math.random() * 1000);
  div.setAttribute("title", "generated div");
  div.style.color = "white";
  div.style.backgroundColor = "yellowgreen";

  const addText = document.createTextNode(dayName);
  div.appendChild(addText);

  document.body.appendChild(div);
}

createNewDiv("Saturday");
createNewDiv("Sunday");
