let tasks = [
  {
    id: 1,
    name: "First task",
    completed: false,
  },
  {
    id: 2,
    name: "Second task",
    completed: false,
  },
  {
    id: 3,
    name: "Third task",
    completed: true,
  },
]

export function getAllTasks() {
  return tasks;
}

export function getTasksByFilter(filter) {
  return tasks.filter(function (task) {
    switch (filter) {
      case "active":
        if(!task.completed) return task;
        break;
      case "completed":
        if(task.completed) return task;
        break;
      case "all":
        return task;
    }
  })
}

export function deleteTaskById(id){
  tasks = tasks.filter(function (task) {
    if (task.id != id) return task;
  })
  const taskCompleted = tasks.filter(function (task) {
    if(task.completed) return task
  });
  return taskCompleted
}

function generateId(){
  return tasks.length > 0 ? tasks[tasks.length -1].id + 1 : 0
}

export function createTask(name){
  const id = generateId();
  const newTask = {
    id: id,
    name: name,
    completed: false
  } ;
  tasks.push(newTask);
  return tasks
}

export function updateCompletedById(id) {
  tasks = tasks.filter(function (task) {
    if (task.id == id) {
      task.completed = !task.completed;
      return task
    } else {
      return task
    };
  })
}

export function deleteAllTasksCompleted() {
  tasks = tasks.filter(function (task) {
    if (task.completed != true) return task;
  })
}