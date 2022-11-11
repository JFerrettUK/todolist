import createTaskBox from './createTaskBox';

//Turn an array into a task box

export default function createProjectHeader(taskArray) {
    let taskName = taskArray[0];
    let projectName = taskArray[1];
    let priorityLevel = taskArray[2];
    let description = taskArray[3];
    let dueDate = taskArray[4];

    createTaskBox(taskName, priorityLevel, dueDate)
}