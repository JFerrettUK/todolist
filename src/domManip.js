//delete content from page-main
import refreshPage from './refreshPage';

//load project page content into page-main
import makeProjectPage from './projectPageLoad';

//load inbox page content into page-main
import makeInboxPage from './inboxPageLoad';

//Show the "add project" form
import showProjectBox from './showProjectBox';

//Close the "add project" form
import closeProjectBox from './closeProjectBox';

//press the project form submit button and return the input "name" value
import submitNewProject from './submitNewProject';

//Add a sub-Header in the nav-bar with the input "name" value of a new submitted project
import makeProjectHeader from './makeProjectHeader';

//Show the "add new task" form
import showTaskBox from './showTaskBox';

//Close the "add task" form
import closeTaskBox from './closeTaskBox';

//Take the inputs of the "add task" form and make it into a taskbox
import makeTrashEventListeners from './makeTrashEventListeners';

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
import addEditProjectManipListeners  from './addEditProjectManipListeners';


export default function domManip() {
    const projectNavMenu = document.getElementById("projectHeader");
    const inboxTextNavMenu = document.getElementById("inboxText");
    const addProjectText = document.getElementById("addProjectText");
    const cancelProject = document.getElementById("cancelButton");
    const submitProject = document.getElementById("submitButton");
    const addProjectForm = document.getElementById("addProjectForm");
    const addTaskCont = document.getElementById("newTaskCont");
    const cancelTask = document.getElementById("taskCancelButton");
    const submitTask = document.getElementById("taskSubmitButton");

    //Delete the page-main and create a page showing projects
    function activateProject () {
        refreshPage();
        makeProjectPage();
    }

    //Delete the page-main and create a page showing the "main inbox" i.e. all tasks
    function activateInbox () {
        refreshPage();
        makeInboxPage();
    }

    //press the project form submit button and return the input "name" value
    //Add a sub-Header in the nav-bar with the input "name" value of a new submitted project
    //Close the "add project" form
    function newProjectSave () {
        let projectName = submitNewProject();
        makeProjectHeader(projectName);
        closeProjectBox();
    }

    projectNavMenu.addEventListener('click', activateProject);
    inboxTextNavMenu.addEventListener('click', activateInbox);
    addProjectText.addEventListener('click', showProjectBox);
    cancelProject.addEventListener('click', closeProjectBox);
    submitProject.addEventListener('click', createProjectTaskOption);
    submitProject.addEventListener('click', newProjectSave);
    addProjectForm.addEventListener("submit", (e) => {e.preventDefault();});
    addTaskCont.addEventListener('click', showTaskBox);
    cancelTask.addEventListener('click', closeTaskBox);
    addTaskCont.addEventListener('click', showTaskBox);
    submitTask.addEventListener("click", function (){
        const array = createInputTaskArray();
        const input = createTaskArray(array);
        if (document.getElementById('dueDate').value == '') {
            alert("Set the due date!")
            closeTaskBox();
            return
          }      
        createTaskBox(input);
        closeTaskBox();
        addDeleteListeners();
        addEditListeners();
    });

    addDeleteListeners();
    addEditListeners();
}