import getLastBox from './getLastBox';

//Close the "add task" form

export default function createTaskBox(input) {
  let taskNo = input.taskNo();
  let taskName = input.task();
  let projectHere = input.project();
  let priorityLevel = input.priority();
  let description = input.description();
  let dueDate = input.dueDate();

  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

  const truePriority = capitalizeFirstLetter(priorityLevel)

  //check due date
  const mainHeader = document.getElementById('page-main');


  let boxNo = getLastBox();
  
  //make container for boxes
  const taskCont = document.createElement('div');
  taskCont.setAttribute("class", "taskCont");
  taskCont.setAttribute("id", `${boxNo}Cont`)

  const breakBox = document.createElement('br');
  breakBox.setAttribute("id", `${boxNo}br`)

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
  dueDateBox.textContent = `${dueDate}`;

  const priorityBox = document.createElement('span');
  priorityBox.setAttribute("class", "priorityBox");
  priorityBox.setAttribute("id", `${boxNo}Priority`);   
  priorityBox.textContent = `${truePriority}`;

  const editIcon = document.createElement('img');
  editIcon.setAttribute("class", "editIcon");
  editIcon.setAttribute("id", `${boxNo}Edit`);   

  const trashIcon = document.createElement('img');
  trashIcon.setAttribute("class", "trashIcon");
  trashIcon.setAttribute("id", `${boxNo}Trash`);   

  const assignedProject = document.createElement('div');
  assignedProject.setAttribute("class", `projectAssignment`);
  assignedProject.setAttribute("id", `${boxNo}BoxProject`)
  assignedProject.innerText = `${projectHere}`

  mainHeader.appendChild(taskCont);
  taskCont.appendChild(breakBox);
  taskCont.appendChild(taskBox);
  taskBox.appendChild(taskBoxStart);
  taskBox.appendChild(taskTitleText);
  taskBox.appendChild(divider);
  taskBox.appendChild(dueDateBox);
  taskBox.appendChild(priorityBox);
  taskBox.appendChild(editIcon);
  taskBox.appendChild(trashIcon);
  mainHeader.appendChild(assignedProject);

  document.getElementById(`${boxNo}Trash`).src="./trash.png";
  document.getElementById(`${boxNo}Edit`).src="./edit.png";

  //make editTask attached in the news task box

  const editTaskFormCont = document.createElement('div');
  editTaskFormCont.setAttribute("class", "editTaskFormCont");
  editTaskFormCont.setAttribute("id", `${boxNo}editCont`)
  taskCont.appendChild(editTaskFormCont);

  const editText = document.createElement('div');
  editText.setAttribute("class", "editText");
  editText.setAttribute("id", `${boxNo}editText`)
  editText.innerText = `Edit ${taskName}`
  editTaskFormCont.appendChild(editText);

  const editTaskForm = document.createElement('form');
  editTaskForm.setAttribute("class", "editTaskForm");
  editTaskForm.setAttribute("id", `${boxNo}editTaskForm`)
  editTaskFormCont.appendChild(editTaskForm);

  const editTaskNameLabel = document.createElement('label');
  editTaskNameLabel.setAttribute("class", "editTaskNameLabel");
  editTaskNameLabel.setAttribute("for", "editTaskNameInput");
  editTaskNameLabel.setAttribute("id", `${boxNo}editTaskNameLabel`)
  editTaskNameLabel.innerText = "Task Name:"
  editTaskForm.appendChild(editTaskNameLabel);

  const editTaskNameInput = document.createElement('input');
  editTaskNameInput.setAttribute("class", "editTaskNameInput");
  editTaskNameInput.setAttribute("type", "editText");
  editTaskNameInput.setAttribute("name", "editTaskNameInput");
  editTaskNameInput.setAttribute("placeholder", "Name of task");
  editTaskNameInput.setAttribute("minlength", "3");
  editTaskNameInput.setAttribute("maxlength", "20");
  editTaskNameInput.setAttribute("id", `${boxNo}editTaskNameInput`)
  editTaskNameInput.setAttribute("value", `${taskName}`)
  editTaskForm.appendChild(editTaskNameInput);

  const editPriorityLabel = document.createElement('label');
  editPriorityLabel.setAttribute("class", "editPriorityLabel");
  editPriorityLabel.setAttribute("for", "editPriorityList");
  editPriorityLabel.innerText = "Priority:"
  editPriorityLabel.setAttribute("id", `${boxNo}editPriorityLabel`)
  editTaskForm.appendChild(editPriorityLabel);

  const editPriorityList = document.createElement('select');
  editPriorityList.setAttribute("class", "editPriorityList");
  editPriorityList.setAttribute("type", "select");
  editPriorityList.setAttribute("name", "editPriority");
  editPriorityList.setAttribute("id", `${boxNo}editPriorityList`)
  editTaskForm.appendChild(editPriorityList);

  const low = document.createElement('option');
  low.innerText = "Low"
  editPriorityList.appendChild(low);

  const medium = document.createElement('option');
  medium.innerText = "Medium"
  editPriorityList.appendChild(medium);

  const high = document.createElement('option');
  high.innerText = "High"
  editPriorityList.appendChild(high);

  const editShortDescLabel = document.createElement('label');
  editShortDescLabel.setAttribute("class", "editShortDescLabel");
  editShortDescLabel.setAttribute("for", "editShortDescInput");
  editShortDescLabel.innerText = "Short Description:"
  editShortDescLabel.setAttribute("id", `${boxNo}editShortDescLabel`)
  editTaskForm.appendChild(editShortDescLabel);

  const editShortDescInput = document.createElement('input');
  editShortDescInput.setAttribute("class", "editShortDescInput");
  editShortDescInput.setAttribute("type", "text");
  editShortDescInput.setAttribute("name", "editShortDescInput");
  editShortDescInput.setAttribute("placeholder", "Describe your project");
  editShortDescInput.setAttribute("minlength", "3");
  editShortDescInput.setAttribute("maxlength", "54");
  editShortDescInput.setAttribute("id", `${boxNo}editShortDescInput`)
  editShortDescInput.setAttribute("value", `${description}`)
  editTaskForm.appendChild(editShortDescInput);

  const editDueDateLabel = document.createElement('label');
  editDueDateLabel.setAttribute("class", "editDueDateLabel");
  editDueDateLabel.setAttribute("for", "editDueDate");
  editDueDateLabel.innerText = "Due Date:"
  editDueDateLabel.setAttribute("id", `${boxNo}editDueDateLabel`)
  editTaskForm.appendChild(editDueDateLabel);

  const editDueDate = document.createElement('input');
  editDueDate.setAttribute("class", "editDueDate");
  editDueDate.setAttribute("type", "date");
  editDueDate.setAttribute("name", "editDueDate");
  editDueDate.setAttribute("id", `${boxNo}editDueDate`)
  editDueDate.setAttribute("value", `${dueDate}`)
  editTaskForm.appendChild(editDueDate);

  const editTaskSubmitBtns = document.createElement('div');
  editTaskSubmitBtns.setAttribute("class", "editTaskSubmitBtns");
  editTaskSubmitBtns.setAttribute("id", `${boxNo}editTaskSubmitBtns`)
  editTaskFormCont.appendChild(editTaskSubmitBtns);

  const editTaskSubmitButton = document.createElement('button');
  editTaskSubmitButton.setAttribute("class", "editTaskSubmitButton taskButtonForm");
  editTaskSubmitButton.innerText = "Save"    
  editTaskSubmitButton.setAttribute("type", "button");
  editTaskSubmitButton.setAttribute("id", `${boxNo}editTaskSubmitButton`)
  editTaskSubmitBtns.appendChild(editTaskSubmitButton);

  const editTaskCancelButton = document.createElement('button');
  editTaskCancelButton.setAttribute("class", "editTaskCancelButton taskButtonForm");
  editTaskCancelButton.innerText = "Close"    
  editTaskCancelButton.setAttribute("type", "button");
  editTaskCancelButton.setAttribute("id", `${boxNo}editTaskCancelButton`)
  editTaskSubmitBtns.appendChild(editTaskCancelButton);

  const taskNoHere = document.createElement('div');
  taskNo++
  taskNoHere.innerText = `${taskNo}`
  taskNoHere.setAttribute("id", `${boxNo}taskNo`);
  taskNoHere.setAttribute("class", `storedTaskNumber`);
  editTaskFormCont.appendChild(taskNoHere);

}