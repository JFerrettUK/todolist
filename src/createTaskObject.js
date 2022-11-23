//Create an object with a project name

export default class Task {
    constructor(taskArray) {
        let jsName = taskArray[0];
        let taskName = taskArray[1];
        let projectName = taskArray[2];
        let priority = taskArray[3];
        let shortDesc = taskArray[4];
        let dueDate = taskArray[5];
    
        this.jsName = jsName;
        this.taskName = taskName;
        this.projectName = projectName;
        this.priority = priority;
        this.shortDesc = shortDesc;
        this.dueDate = dueDate;
    };

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