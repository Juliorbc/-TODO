import { render, setTrashIcon } from "../utils";
import { getTasksByFilter } from "../data";
import TaskList from "./TaskList";

function Filters(container){
    const view = ` <ul class="nav-buttons">
    <li class="nav-button active"><button class="button" data-id="all">All</button">
    </li>
    <li class="nav-button"><button class="button" data-id="active">Active</button></li>
    <li class="nav-button"><button class="button" data-id="completed">Completed</button></li>
</ul>
    `
    render(view, container)
    addEventFilter();
}

function addEventFilter() {
    const $filterButtons = document.querySelectorAll(".nav-button");
    const $contenedorTasks = document.querySelector("#tasks");
    $filterButtons.forEach(function (button) {
      button.addEventListener("click", function (ev) {
        ev.target.parentElement.classList.add("active");
        $filterButtons.forEach(function (btn) {
          if (button != btn) {
            btn.classList.remove("active");
          }
        });
        const filter = ev.currentTarget.children[0].dataset.id;
        const tasks = getTasksByFilter(filter);
        TaskList(tasks, $contenedorTasks);
        const $button = document.querySelector("#trash");
        const $buttonSubmit = document.querySelector(".button-submit");
        const $inputText = document.querySelector(".input");
        if (filter === "completed") {
          $button.style.display = "block";
          $buttonSubmit.style.display = "none";
          $inputText.style.display = "none"
          setTrashIcon(".btn-trash")
        } else {
          $button.style.display = "none";
          $buttonSubmit.style.display = "initial";
          $inputText.style.display = "initial"
        }
      });
    });
  }
export default Filters