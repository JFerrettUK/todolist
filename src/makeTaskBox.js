export default function makeTaskBox(taskName, priorityLevel) {
    const mainHeader = document.getElementById('page-main');
    
    const breakBox = document.createElement('br');

    const taskBox = document.createElement('div');
    taskBox.setAttribute("class", "taskBox");
    taskBox.setAttribute("id", `${taskName}`)

    const taskBoxStart = document.createElement('div');
    taskBoxStart.setAttribute("class", "taskBoxStart");

    const taskTitleText = document.createElement('span');
    taskTitleText.setAttribute("class", "taskTitleText");
    taskTitleText.setAttribute("id", `${taskName}taskTitleText`);   
    taskTitleText.textContent = `${taskName}`;

    const divider = document.createElement('div');
    divider.setAttribute("class", "divider");

    const priorityBox = document.createElement('span');
    priorityBox.setAttribute("class", "priorityBox");
    priorityBox.setAttribute("id", `${taskName}PriorityLevel`);   
    priorityBox.textContent = `${priorityLevel}`;

    const trashIcon = document.createElement('img');
    trashIcon.setAttribute("id", `${taskName}TrashIcon`);   
    trashIcon.setAttribute("class", "trashIcon");

    mainHeader.appendChild(breakBox);
    mainHeader.appendChild(taskBox);
    taskBox.appendChild(taskBoxStart);
    taskBox.appendChild(taskTitleText);
    taskBox.appendChild(divider);
    taskBox.appendChild(priorityBox);
    taskBox.appendChild(trashIcon);

    document.getElementById(`${taskName}TrashIcon`).src="./trash.png";
}