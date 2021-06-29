function Task(task) {
  const view = `<li class="d-flex justify-content-between align-items-center list-task ${task.completed ? "task-check" : ""}">
            <label class="task">
              <input data-id="${task.id}" type="checkbox" class="checkbox" ${task.completed ? "checked" : ""}/>
              ${task.name}
            </label>
            <button data-id="${task.id}" class="btn-trash" type="button">
              <i class="fas fa-trash"></i>
            </button>
          </li>`;
  return view;
}

export default Task;
