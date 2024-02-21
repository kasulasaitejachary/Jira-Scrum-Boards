const containers = document.getElementsByClassName("container");
// This object maintains the id of card & it's container whenever a card is started dragging. 
const draggingItemsDetails = {
  cardElement: null,
  containerId:"",
};

function onDragStart(e){
//   This func. will be triggered when we start dragging any card.
draggingItemsDetails.cardElement = e.target;
draggingItemsDetails.containerId = e.target.parentNode.parentNode.id;
}

function onDrop(e){
  // If we drop an element inside in-progress container => e.target => in-progress container. Same like To Do container & Done container.
  // User might drop inside another card. So ensure to drop inside the container only.
const dropContainer = e.target.closest("div.container");
if(dropContainer.id === draggingItemsDetails.containerId){
  alert("You can't drop the card in the same container");
  return;
}
dropContainer.appendChild(draggingItemsDetails.cardElement);
}

for(let i=0; i<containers.length; i++){
  // For each container add dragover and drop event listeners 
  containers[i].addEventListener("dragover", (e)=>{
    e.preventDefault();
  });
    containers[i].addEventListener("drop", onDrop);
  }

  
