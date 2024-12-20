document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // if(tasks.length() > 0){
    tasks.forEach((task) => renderTask(task));

    // tasks.forEach(()=>)
  // }

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    todoInput.value = ""; //clear input
    console.log(tasks);
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;
    
    todoList.appendChild(li);
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      // li.remove();
      saveTasks();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); //prevent toggle from firing
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTasks();
      // renderTask(task);

    });
    // todoList.appendChild(li);
  }
  // function saveTasks() {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }

  function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
    localStorage.setItem("tasks",);
  }
});





// document.addEventListener("DOMContentLoaded",() => {
//   const todoInput = document.getElementById("todo-input");
//   const addButton = document.getElementById("add-task-btn");
//   const todoList = document.getElementById("todo-list");

//   const Tasks = localStorage.getItem("tasks")|| [];
//   Tasks.forEach((t) => renderTask(t));

//   addButton.addEventListener("click",() => {
//     if(todoInput.value.trim().length == 0)return;
//     const input = todoInput.value.trim();

//     const newTask = {
//       id:Date.now(),
//       text : input,
//       completed:false,
//     };
//     Tasks.push(newTask);
//     saveTasks();
//     renderTask(newTask);
//     todoInput.value = "";
//   });

//   function saveTasks(){
//     localStorage.setItem("tasks",JSON.stringify(Tasks));
//   }

//   function renderTask(task){
//     const li = document.createElement("li");
//     li.setAttribute("data-id",task.id);
//     if(task.completed)li.classList.add("completed");
//     li.innerHTML =
//     `<span>${task.text}</span>
//     <button>delete</button>`
//     ;
//     li.addEventListener("click",(e) => {
//       if(e.target.tagName === "BUTTON")return;
//       task.completed = !task.completed;
//       li.classList.toggle("completed");
//       saveTasks();
//     });

//     li.querySelector("button").addEventListener("click",() => {
//       task = task.filter((t) => t.id === task.id);
//       li.remove();
//       saveTasks();
//     });
//     todoList.appendChild(li);
// }
// });