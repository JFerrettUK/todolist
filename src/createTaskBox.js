import getBoxNo from './getBoxNo';

//Close the "add task" form

export default function createTaskBox(array) {
    let taskName = array[0];
    let priorityLevel = array[1];
    let dueDate = array[2];

    const mainHeader = document.getElementById('page-main');
    const breakBox = document.createElement('br');
    let boxNo = getBoxNo();
    
    //make container for boxes
    const taskCont = document.createElement('div');
    taskCont.setAttribute("class", "taskCont");
    taskCont.setAttribute("id", `${boxNo}Cont`)

    const taskBox = document.createElement('div');
    taskBox.setAttribute("class", "taskBox");
    taskBox.setAttribute("id", `${boxNo}Box`)

    const taskBoxStart = document.createElement('div');
    taskBoxStart.setAttribute("class", "taskBoxStart");

    const taskTitleText = document.createElement('span');
    taskTitleText.setAttribute("class", "taskTitleText");
    taskTitleText.setAttribute("id", `${boxNo}taskTitleText`);   
    taskTitleText.textContent = `${taskName}`;

    const divider = document.createElement('div');
    divider.setAttribute("class", "divider");

    const dueDateBox = document.createElement('span');
    dueDateBox.setAttribute("id", `${boxNo}Date`);   
    dueDateBox.textContent = `Due: ${dueDate}`;

    const priorityBox = document.createElement('span');
    priorityBox.setAttribute("class", "priorityBox");
    priorityBox.setAttribute("id", `${boxNo}Priority`);   
    priorityBox.textContent = `${priorityLevel}`;

    const trashIcon = document.createElement('img');
    trashIcon.setAttribute("class", "trashIcon");
    trashIcon.setAttribute("id", `${boxNo}Trash`);   

    mainHeader.appendChild(taskCont);
    taskCont.appendChild(breakBox);
    taskCont.appendChild(taskBox);
    taskBox.appendChild(taskBoxStart);
    taskBox.appendChild(taskTitleText);
    taskBox.appendChild(divider);
    taskBox.appendChild(dueDateBox);
    taskBox.appendChild(priorityBox);
    taskBox.appendChild(trashIcon);

    document.getElementById(`${boxNo}Trash`).src="./trash.png";
}