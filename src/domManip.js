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

//Delete a task bar with the assigned number
import deleteTaskBox from './deleteTaskBox';

//Show the "add new task" form
import showTaskBox from './showTaskBox';

//Close the "add task" form
import closeTaskBox from './closeTaskBox';

//Take the inputs of the "add task" form and make it into a taskbox
import makeInputToTask from './makeInputToTask';

//Take the inputs of the "add task" form and make it into a taskbox
import makeTrashEventListeners from './makeTrashEventListeners';

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

    //deleteButtons
    const trashButton0 = document.getElementById(`0Trash`)
    const trashButton1 = document.getElementById(`1Trash`)
    const trashButton2 = document.getElementById(`2Trash`)
    const trashButton3 = document.getElementById(`3Trash`)
    const trashButton4 = document.getElementById(`4Trash`)
    const trashButton5 = document.getElementById(`5Trash`)
    const trashButton6 = document.getElementById(`6Trash`)
    const trashButton7 = document.getElementById(`7Trash`)
    const trashButton8 = document.getElementById(`8Trash`)
    const trashButton9 = document.getElementById(`9Trash`)

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

    //Turn an array into a task box
    function makeInputToT() {
        const taskArray = ["taskName", "ProjectName", "Medium", "A test task", "09/12/2022"];
        makeInputToTask(taskArray)
    }    

    projectNavMenu.addEventListener('click', activateProject);
    inboxTextNavMenu.addEventListener('click', activateInbox);
    addProjectText.addEventListener('click', showProjectBox);
    cancelProject.addEventListener('click', closeProjectBox);
    submitProject.addEventListener('click', newProjectSave);
    addProjectForm.addEventListener("submit", (e) => {e.preventDefault();});
    addTaskCont.addEventListener('click', showTaskBox);
    cancelTask.addEventListener('click', closeTaskBox);
    submitTask.addEventListener('click', makeInputToT);

    makeTrashEventListeners();
}
