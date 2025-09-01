/**
 * Classe para gerenciamento de tarefas
 * Funcionalidades: Create, Read, Update, Delete e Concluir
 */
class TaskManager {
  constructor() {
    this.tasks = [];
    this.idCounter = 1;
  }

  // Create
  addTask(description) {
    const task = { id: this.idCounter++, description, completed: false };
    this.tasks.push(task);
    return task;
  }

  // Read
  getTasks() {
    return this.tasks;
  }

  // Update
  updateTask(id, newDescription) {
    const task = this.tasks.find(t => t.id === id);
    if (!task) return null;
    task.description = newDescription;
    return task;
  }

  // Delete
  deleteTask(id) {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index === -1) return false;
    this.tasks.splice(index, 1);
    return true;
  }

  // Extra (mudança de escopo)
  completeTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (!task) return null;
    task.completed = true;
    return task;
  }
}

module.exports = TaskManager;