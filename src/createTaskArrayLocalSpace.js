//Create an object with a set of task details

export default function createTaskArrayLocalSpace(taskArray) {

    const taskNo = taskArray.taskNo;
    const taskName = taskArray.taskName;
    const project = taskArray.projectName;
    const priority = taskArray.priority;
    const description = taskArray.shortDesc;
    const dueDate = taskArray.dueDate;

     return {
        taskNo: () => taskNo,
        task: () => taskName,
        project: () => project,
        priority: () => priority,
        description: () => description,
        dueDate: () => dueDate,
    };    
};