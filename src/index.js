class TaskManager {
  constructor() {
    this.tasks = [];
    this.id = 1;
  }

  addTask(title) {
    this.tasks.push({ id: this.id++, title, completed: false });
  }

  getTasks() {
    return this.tasks;
  }

  updateTask(id, newTitle) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.title = newTitle;
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  completeTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = true;
  }
}

module.exports = TaskManager;
