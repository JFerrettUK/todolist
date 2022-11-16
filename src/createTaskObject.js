//Create an object with a set of task details

export default function createTaskObject(taskArray) {
    const jsNameHere = taskArray[0]
    const titleHere = taskArray[1]
    const projectHere = taskArray[2]
    const priorityHere = taskArray[3]
    const descriptionHere = taskArray[4]
    const dueDateHere = taskArray[5]

     return {
        jsName: () => jsNameHere,
        task: () => titleHere,
        project: () => projectHere,
        priority: () => priorityHere,
        description: () => descriptionHere,
        dueDate: () => dueDateHere,
    };    
};