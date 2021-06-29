import Task from "./Task";
import { render, setTrashIcon } from "../utils";
import {
  deleteTaskById,
  updateCompletedById,
  deleteAllTasksCompleted,
} from "../data";

function taskList(listTasks) {
  let tasks = listTasks.map(Task);

  return `<ul class="list-tasks">
            ${tasks.join("")} 
        </ul>`;
}


export default function TaskList(tasks, parent) {
  render(taskList(tasks), parent);
  addEventTask();
  addEventTrashDelete(parent);
  deleteAllTasks(parent);
}

// Event Checkbox
function addEventTask() {
  const $checkbox = document.querySelectorAll(".checkbox");

  $checkbox.forEach(function (tasks) {
    tasks.addEventListener("click", function (ev) {
      ev.target.parentElement.parentElement.classList.toggle("task-check");
      const taskId = ev.currentTarget.dataset.id;
      updateCompletedById(taskId);
    });
  });
}

// Event Button task trash
function addEventTrashDelete(parent) {
  const $taskTrash = document.querySelectorAll(".btn-trash");

  $taskTrash.forEach(function (buttonTrash) {
    buttonTrash.addEventListener("click", function (ev) {
      const taskId = ev.currentTarget.dataset.id;
      const tasks = deleteTaskById(taskId);
      TaskList(tasks, parent);
      setTrashIcon(".btn-trash")
    });
  });
}


// Event Trash All Task
function deleteAllTasks(parent) {
  const $buttonDeleteAllTasks = document.querySelector("#trash");

  $buttonDeleteAllTasks.addEventListener("click", function (ev) {
    deleteAllTasksCompleted();
    TaskList([], parent);
  });
}
