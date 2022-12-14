//Amend the displayed values of a task box with those of an edit

export default function saveEditDOMValues(boxNo) {
    let newTaskName = document.getElementById(`${boxNo}editTaskNameInput`).value
    let newPriority = document.getElementById(`${boxNo}editPriorityList`).value
    let newDueDate = document.getElementById(`${boxNo}editDueDate`).value

    document.getElementById(`${boxNo}taskTitleText`).innerText = newTaskName;
    document.getElementById(`${boxNo}Date`).innerText = newDueDate;
    document.getElementById(`${boxNo}Priority`).innerText = newPriority;
    document.getElementById(`${boxNo}editText`).innerText = `Edit ${newTaskName}`;
}