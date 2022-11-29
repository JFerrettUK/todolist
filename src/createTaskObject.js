//Create an object with a project name

export default class Task {
    constructor(input) {
        let jsName = input.jsName();
        let taskName = input.task();
        let projectHere = input.project();
        let priorityLevel = input.priority();
        let description = input.description();
        let dueDate = input.dueDate();
        
        this.jsName = jsName;
        this.taskName = taskName;
        this.projectName = projectHere;
        this.priority = priorityLevel;
        this.shortDesc = description;
        this.dueDate = dueDate;
    };

    getJsName() {
        return this.jsName;
    }

    getTaskName() {
        return this.taskName;
    }

    getProjectName() {
        return this.projectName;
    }

    getPriority(newPriority) {
        return this.priority;
    }

    getShortDesc() {
        return this.shortDesc;
    }

    editJsName(newJsName) {
        this.jsName = newJsName;
    }

    editTaskName(newTaskName) {
        this.taskName = newTaskName;
    }

    editProjectName(newProjectName) {
        this.projectName = newProjectName;
    }

    editPriority(newPriority) {
        this.priority = newPriority;
    }

    editShortDesc(newShortDesc) {
        this.shortDesc = newShortDesc;
    }

    editDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }
}