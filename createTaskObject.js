//Create an object with a project name

export default class Task {
    constructor(input) {
        let taskNo = input.taskNo();
        let taskName = input.task();
        let projectHere = input.project();
        let priorityLevel = input.priority();
        let description = input.description();
        let dueDate = input.dueDate();
        
        this.taskNo = taskNo;
        this.taskName = taskName;
        this.projectName = projectHere;
        this.priority = priorityLevel;
        this.shortDesc = description;
        this.dueDate = dueDate;
    };

    getTaskNo() {
        return this.taskNo;
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

    edittaskNo(newtaskNo) {
        this.taskNo = newtaskNo;
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