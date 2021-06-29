import { render } from "../utils";
import { createTask } from "../data";
import TaskList from "./TaskList";
function InputTask(container) {
  const view = `<input class="input" type="text" placeholder="add details">
    <button type="button" class="button-submit">Add</button>`;

  render(view, container);
  addEventNewTask();
  addEventNewTaskWithkeyboard();
}

export default InputTask;

//Event Button New Task
function addEventNewTask() {
  const $buttonSubmit = document.querySelector(".button-submit");

  $buttonSubmit.addEventListener("click", function (ev) {
    const $inputText = document.querySelector(".input");
    createNewTask($inputText);
  });
}

function addEventNewTaskWithkeyboard() {
  const $inputText = document.querySelector(".input");

  $inputText.addEventListener("keydown", function (ev) {
    const keyName = ev.key;
    console.log(keyName);

    if (keyName != "Enter") {
      return false;
    }

    createNewTask($inputText);
  });
}

function createNewTask(inputText) {
  const $contenedorTasks = document.querySelector("#tasks");

  const newName = inputText.value;
  if (newName === "") {
    return false;
  }
  if (newName.length <= 3) {
    return false;
  }
  const tasks = createTask(newName);
  TaskList(tasks, $contenedorTasks);
  inputText.value = "";
}
