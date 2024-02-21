const createButton = document.getElementsByTagName("button");

const inputElements = document.querySelectorAll("section> div> input");

function deleteTask(deleteButton){
// This one will be executed when user clicks on the delete button of a task card.
const deleteCard = deleteButton.parentNode;
deleteCard.remove();
}

function handleInput(event){
  // Here event==Input
  // keycode=13(Enter Key)
if(event.keyCode===13){
  // Below line will capture the input value
  let taskName = event.target.value;
  const card = document.createElement("div"); 
  card.className="card";
  card.draggable="true";
  card.innerHTML = `
  <b id="task-text">${taskName}</b>
  <button id="btn" onclick="deleteTask(this)">Delete</button>
  `;

   // add the dragStart event for every created card.
   card.addEventListener("dragstart", onDragStart);
  // The above card should go inside the <div class="cards"></div>
  const cardsDiv = event.target.nextElementSibling;
  cardsDiv.appendChild(card);

  // Emptying  the input
  event.target.value="";
  event.target.className="hide";
}
}

for(let i=0; i<inputElements.length; i++){
  inputElements[i].addEventListener("keyup", handleInput);
}

// Create Task
function createTask(event){
  const textInput = event.target.nextElementSibling;
  textInput.className = "show"; 
}


// Adding event Listners for create buttons
for(let i=0; i<createButton.length; i++){
  createButton[i].addEventListener("click", createTask);
}


