//Create an array from the task input form

import getLastBox from './getLastBox';

export default function createInputEditTaskArray(boxNo) {
    const taskNo = boxNo;
    const taskNameInput = document.getElementById(`${boxNo}editTaskNameInput`).value;
    const projectNo = document.getElementById(`${boxNo}BoxProject`).innerText;
    const priorityList = document.getElementById(`${boxNo}editPriorityList`).value;
    const shortDescInput = document.getElementById(`${boxNo}editShortDescInput`).value;
    const dueDate = document.getElementById(`${boxNo}editDueDate`).value;

    //set assigned project

    const taskArray = [];
    taskArray.push(taskNo);
    taskArray.push(taskNameInput);
    taskArray.push(projectNo);
    taskArray.push(priorityList);
    taskArray.push(shortDescInput);
    taskArray.push(dueDate);

    return taskArray
}
