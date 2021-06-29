import TaskList from "./Components/TaskList";
import Filters from "./Components/Filters";
import InputTask from "./Components/InputTask";
import {
  getAllTasks,
} from "./data";

// Loaded Document
let tasks = getAllTasks();
const $contenedorTasks = document.querySelector("#tasks");
const $contenedorFilters = document.querySelector("#Filters");
const $contenedorInputTask = document.querySelector("#InputTask");

window.addEventListener("DOMContentLoaded", function () {
  TaskList(tasks, $contenedorTasks);
  Filters($contenedorFilters);
  InputTask($contenedorInputTask)
});





