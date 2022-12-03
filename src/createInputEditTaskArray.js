//Create an array from the task input form

import getLastBox from './getLastBox';

export default function createInputTaskArray(boxNo) {
    const jsName = getLastBox();
    const taskNameInput = document.getElementById(`${boxNo}editTaskNameInput`).value;
    const priorityList = document.getElementById(`${boxNo}editPriorityList`).value;
    const shortDescInput = document.getElementById(`${boxNo}editShortDescInput`).value;
    const dueDate = document.getElementById(`${boxNo}editDueDate`).value;

    //set assigned project
    let projectOption = document.querySelector('#projectList');
    const projectNo = projectOption.options[projectOption.selectedIndex].id;

    const taskArray = [];
    taskArray.push(jsName);
    taskArray.push(taskNameInput);
    taskArray.push(projectNo);
    taskArray.push(priorityList);
    taskArray.push(shortDescInput);
    taskArray.push(dueDate);

    return taskArray
}