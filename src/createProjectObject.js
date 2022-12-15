//Create a project and allow tasks to be appended to it

export default class Project {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.tasks = []
    };

    getTasks() {
        return this.tasks;
    }

    appendTask(task) {
        this.tasks.push(task);
    }

    replaceTask(taskNo, newTask) {
        console.log(taskNo)
        this.tasks[taskNo] = newTask;
    }
}