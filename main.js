console.log('Hello World!');

const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list-container");


//counter functionality
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");







function addTask() {
  //input 
  const task = inputBox.value.trim();
   
   // if it is empty
  if(!task){
    alert("done");
    return ; 
  }
  
  // creation of a new checkbox
  const li = document.createElement("li");
  li.innerHTML = 
  `<div id="appendc">
  <label>
  <input type = "checkbox"/>
  <span id="task">${task}</span>
  </label>
  <span class="edit-btn">Edit</span>
  <span class="delete-btn">Delete</span>
  </div>
  `;
  
  // append the checkbox
  listContainer.appendChild(li);
  
  //empty the input
  inputBox.value = "";
  
  //edit and delete functionality
  const checkbox = li.querySelector("input");
  const editBtn = li.querySelector(".edit-btn");
  const delBtn = li.querySelector(".delete-btn");
  const taskSpan= li.querySelector("span");

//checkbox functionality
checkbox.addEventListener("click", () =>{
  li.classList.toggle("completed",checkbox.checked);
  updateCounters();
}) ;

//edit functionality
editBtn.addEventListener("click",()=>{
  const update = prompt("edit task:",taskSpan.textContent);
  if (update == ""){
    alert("YOU CAN NOT ENTER SPACES!!");
    return;
  }
  if (update !== null){
    taskSpan.textContent = update;
    li.classList.remove("completed");
    checkbox.checked = false;
  }
  updateCounters();
});

delBtn.addEventListener("click",()=>{
  if (confirm("are you sure to delete ")){
    li.remove();
    updateCounters();
  }
});
updateCounters();

}


function updateCounters(){
  const completed = document.querySelectorAll(".completed").length;
  const uncompleted = document.querySelectorAll("li:not(.completed)").length;
  completedCounter.textContent = completed;
  uncompletedCounter.textContent = uncompleted;
}
updateCounters();