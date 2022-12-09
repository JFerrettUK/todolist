//Create a project and allow tasks to be appended to it

export default class Project {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.tasks = []
    };

    appendTask(task) {
        this.tasks.push(task);
    }

    replaceTask(taskNo, newTask) {
        this.tasks[taskNo] = newTask;
    }
}