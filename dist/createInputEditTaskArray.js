//Create an array from the task input form

import getLastBox from './getLastBox';

export default function createInputEditTaskArray(boxNo) {

    function findRelevantProject(){
        const projectName = document.getElementById(`${boxNo}BoxProject`).innerText
        return projectName
    }

    let taskNo = boxNo;
    const taskNameInput = document.getElementById(`${boxNo}editTaskNameInput`).value;
    const projectNo = findRelevantProject()
    const priorityList = document.getElementById(`${boxNo}editPriorityList`).value;
    const shortDescInput = document.getElementById(`${boxNo}editShortDescInput`).value;
    const dueDate = document.getElementById(`${boxNo}editDueDate`).value;

    //set assigned project

    //update to match normal no
    taskNo += 1;


    const taskArray = [];
    taskArray.push(taskNo);
    taskArray.push(taskNameInput);
    taskArray.push(projectNo);
    taskArray.push(priorityList);
    taskArray.push(shortDescInput);
    taskArray.push(dueDate);

    return taskArray
}
