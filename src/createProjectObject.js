//Create a project and allow tasks to be appended to it

export default class Project {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.tasks = []
    };

    appendTask(task) {
        this.tasks.push(task);
    }
}