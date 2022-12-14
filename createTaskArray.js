//Create an object with a set of task details

export default function createTaskArray(taskArray) {
    const taskNoHere = taskArray[0];
    const titleHere = taskArray[1];
    const projectHere = taskArray[2];
    const priorityHere = taskArray[3];
    const descriptionHere = taskArray[4];
    const dueDateHere = taskArray[5];

     return {
        taskNo: () => taskNoHere,
        task: () => titleHere,
        project: () => projectHere,
        priority: () => priorityHere,
        description: () => descriptionHere,
        dueDate: () => dueDateHere,
    };    
};