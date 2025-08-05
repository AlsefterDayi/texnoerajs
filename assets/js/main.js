let addBtn = document.getElementById("adBtn");
let addInput = document.getElementById("add");
let list = document.getElementById("list");
let obTasks = [];
let tasks = fetch("https://jsonplaceholder.typicode.com/todos");
tasks
  .then((response) => response.json())
  .then((data) => {
    data.forEach((task) => {
      obTasks.push({
        id: task.id,
        title: task.title,
        completed: task.completed,
      });
    });
    showlist();
  });

function add() {
  if (addInput.value === "") {
    alert("Please enter a task");
    return;
  }
  let newtask = addInput.value;
  obTasks.push({
    id: obTasks.length + 1,
    title: newtask,
    completed: false,
  });
  showlist();
}
function showlist() {
  list.innerHTML = "";
  obTasks.forEach((task) => {
    let li = document.createElement("li");
    li.innerHTML = `<span class="title">${task.title}</span>
                        <button class="btn delete" onclick="deleteTask(${task.id})">Delete</button>`;
    li.className = "list-item";
    if (task.completed) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
    list.appendChild(li);
  });
  addInput.value = "";
}

addBtn.addEventListener("click", add);
