// Add new Text Node to the parent element

function createNewDiv(dayName) {
  const newDiv = document.createElement("div");
  newDiv.className = "newDiv";
  newDiv.id = Math.floor(Math.random() * 10);
  newDiv.setAttribute("title", "generated div");
  newDiv.style.color = "white";
  newDiv.style.backgroundColor = "aquamarine";
  newDiv.style.padding = 20;

  // create new text Node
  const addText = document.createTextNode(dayName);
  // Add Text to the Our Div
  newDiv.appendChild(addText);
  //   Add the new Div to the body
  document.body.appendChild(newDiv);
}

createNewDiv("Monday");
createNewDiv("Tuesday");
createNewDiv("Wednesday");
createNewDiv("Thursday");
createNewDiv("Friday");
createNewDiv("Saturday");
createNewDiv("Sunday");
