//Show the "add project" form
import showProjectBox from './showProjectBox';

//Close the "add project" form
import closeProjectBox from './closeProjectBox';

//press the project form submit button and return the input "name" value
import submitNewProject from './submitNewProject';

//Add a sub-Header in the nav-bar with the input "name" value of a new submitted project
import makeProjectHeader from './makeProjectHeader';

//Show the "add new task" form
import showCreateTaskBox from './showCreateTaskBox';

//Close the "add task" form
import closeTaskBox from './closeTaskBox';

//create an object with task and details in it
import createTaskArray from './createTaskArray';

//create an OBJ in the HTML from input
import createTaskBox from './createTaskBox';

//Adds edit listeners dependant on the number of task boxes
import addEditListeners from './addEditListeners';

//Adds delete listeners dependant on the number of task boxes
import addDeleteListeners from './addDeleteListeners';

//Create an array from the task input form
import createInputTaskArray  from './createInputTaskArray';

//Create an array from the task input form
import createProjectTaskOption  from './createProjectTaskOption';

//Create an array from the task input form
import showAllTaskBox  from './showAllTaskBox';

//Change the main title
import changeInboxTitle  from './changeInboxTitle';

//Add listeners to all projects listed in the nav menu
import addProjectTitleListeners from './addProjectTitleListeners';

export default function domManip() {
    const projectNavMenu = document.getElementById("projectHeader");
    const addProjectText = document.getElementById("addProjectText");
    const cancelProject = document.getElementById("cancelButton");
    const submitProject = document.getElementById("submitButton");
    const addProjectForm = document.getElementById("addProjectForm");
    const addTaskCont = document.getElementById("newTaskCont");
    const cancelTask = document.getElementById("taskCancelButton");
    const submitTask = document.getElementById("taskSubmitButton");
    const inbox = document.getElementById("inboxText");

    //press the project form submit button and return the input "name" value
    //Add a sub-Header in the nav-bar with the input "name" value of a new submitted project
    //Close the "add project" form
    function newProjectSave () {
        let projectName = submitNewProject();
        makeProjectHeader(projectName);
        closeProjectBox();
        addProjectTitleListeners();
    }

    projectNavMenu.addEventListener('click', showAllTaskBox);
    projectNavMenu.addEventListener('click', changeInboxTitle);
    inbox.addEventListener('click', changeInboxTitle);
    inbox.addEventListener('click', showAllTaskBox);
    addProjectText.addEventListener('click', showProjectBox);
    cancelProject.addEventListener('click', closeProjectBox);
    submitProject.addEventListener("click", function (){
        createProjectTaskOption();
        newProjectSave();
    });
    addProjectForm.addEventListener("submit", (e) => {e.preventDefault();});
    addTaskCont.addEventListener('click', showCreateTaskBox);
    cancelTask.addEventListener('click', closeTaskBox);
    addTaskCont.addEventListener('click', showCreateTaskBox);
    submitTask.addEventListener("click", function (){
        changeInboxTitle()
        const array = createInputTaskArray();
        const input = createTaskArray(array);
        if (document.getElementById('dueDate').value == '') {
            alert("Set the due date!")
            return
          }      
        createTaskBox(input);
        closeTaskBox();
        addDeleteListeners();
        addEditListeners();
        showAllTaskBox();
    });

    //Make the id titleHead innerText change depending on the selected project

    addDeleteListeners();
    addEditListeners();
    addProjectTitleListeners();
}