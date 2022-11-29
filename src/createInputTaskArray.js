//Create an array from the task input form

import getLastBox from './getLastBox';

export default function createInputTaskArray() {
    const jsName = getLastBox();
    const taskNameInput = document.getElementById('taskNameInput').value;
    const priorityList = document.getElementById('priorityList').value;
    const shortDescInput = document.getElementById('shortDescInput').value;
    const dueDate = document.getElementById('dueDate').value;

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