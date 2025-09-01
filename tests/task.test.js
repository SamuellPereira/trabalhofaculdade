const { expect } = require("chai");
const TaskManager = require("../src/index");

describe("TaskManager CRUD", () => {
  let manager;

  beforeEach(() => {
    manager = new TaskManager();
  });

  it("Deve adicionar uma nova tarefa", () => {
    const task = manager.addTask("Nova tarefa");
    expect(task).to.have.property("id");
    expect(task.description).to.equal("Nova tarefa");
  });

  it("Deve listar tarefas", () => {
    manager.addTask("Teste");
    expect(manager.getTasks()).to.have.lengthOf(1);
  });

  it("Deve atualizar uma tarefa", () => {
    const task = manager.addTask("Antiga descrição");
    const updated = manager.updateTask(task.id, "Nova descrição");
    expect(updated.description).to.equal("Nova descrição");
  });

  it("Deve excluir uma tarefa", () => {
    const task = manager.addTask("Excluir");
    const result = manager.deleteTask(task.id);
    expect(result).to.be.true;
    expect(manager.getTasks()).to.have.lengthOf(0);
  });

  it("Deve marcar uma tarefa como concluída", () => {
    const task = manager.addTask("Finalizar");
    const completed = manager.completeTask(task.id);
    expect(completed.completed).to.be.true;
  });
});
