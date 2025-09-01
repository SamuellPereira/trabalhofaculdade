const { expect } = require("chai");
const TaskManager = require("../src/index");

describe("TaskManager CRUD", () => {
  let manager;

  beforeEach(() => {
    manager = new TaskManager();
  });

  it("Deve adicionar uma nova tarefa", () => {
    manager.addTask("Estudar Git");
    expect(manager.getTasks()).to.have.lengthOf(1);
    expect(manager.getTasks()[0].title).to.equal("Estudar Git");
  });

  it("Deve listar tarefas", () => {
    manager.addTask("Tarefa 1");
    manager.addTask("Tarefa 2");
    const tasks = manager.getTasks();
    expect(tasks).to.have.lengthOf(2);
  });

  it("Deve atualizar uma tarefa", () => {
    manager.addTask("Antigo");
    manager.updateTask(1, "Novo");
    expect(manager.getTasks()[0].title).to.equal("Novo");
  });

  it("Deve excluir uma tarefa", () => {
    manager.addTask("Tarefa para excluir");
    manager.deleteTask(1);
    expect(manager.getTasks()).to.have.lengthOf(0);
  });

  it("Deve marcar uma tarefa como concluída", () => {
    manager.addTask("Concluir essa");
    manager.completeTask(1);
    expect(manager.getTasks()[0].completed).to.be.true;
  });
});
