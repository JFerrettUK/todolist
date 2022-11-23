//create an object with task and details in it
import createTaskObject from './createTaskObject';

//create an object with task and details in it
import createProjectObject from './createProjectObject';

//Create an array from the task input form
import createInputTaskArray  from './createInputTaskArray';

//Create an array from the task input form
import createProjectTaskOption  from './createProjectTaskOption';

export default function manipObj() {
    const projectNavMenu = document.getElementById("projectHeader");
    const inboxTextNavMenu = document.getElementById("inboxText");
    const addProjectText = document.getElementById("addProjectText");
    const cancelProject = document.getElementById("cancelButton");
    const submitProject = document.getElementById("submitButton");
    const addProjectForm = document.getElementById("addProjectForm");
    const addTaskCont = document.getElementById("newTaskCont");
    const cancelTask = document.getElementById("taskCancelButton");
    const submitTask = document.getElementById("taskSubmitButton");



    

    projectNavMenu.addEventListener('click', activateProject);
    inboxTextNavMenu.addEventListener('click', activateInbox);
    submitProject.addEventListener('click', createProjectTaskOption);
    submitProject.addEventListener('click', newProjectSave);
    submitTask.addEventListener("click", function (){
        const array = createInputTaskArray();
        const input = createTaskObject(array);
        createTaskBox(input);
        closeTaskBox();
        addDeleteListeners()
    });
}