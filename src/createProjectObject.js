//Create a project and allow tasks to be appended to it

export default class Project {
    constructor(id) {
        this.id = id;
        this.tasks = []
    };

    appendTask(task) {
        this.tasks.push(task);
    }
}