import makeProjectPage from './projectPageLoad';
import makeInboxPage from './inboxPageLoad';
import refreshPage from './refreshPage';
import newProjectBox from './newProjectBox';
import closeProjectBox from './closeProjectBox';
import submitNewProject from './submitNewProject';
import makeProjectHeader from './makeProjectHeader';
import deleteTaskBox from './deleteTaskBox';

export default function domManip() {
    const projectHeader = document.getElementById("projectHeader");
    const inboxText = document.getElementById("inboxText");
    const addProjectText = document.getElementById("addProjectText");
    const closeProject = document.getElementById("cancelButton");
    const submitProject = document.getElementById("submitButton");
    const addProjectForm = document.getElementById("addProjectForm");

    //deleteButtons
    const trashButton0 = document.getElementById(`0Trash`)
    const trashButton1 = document.getElementById(`1Trash`)
    const trashButton2 = document.getElementById(`2Trash`)

    function activateProject () {
        refreshPage();
        makeProjectPage();
    }

    function activateInbox () {
        refreshPage();
        makeInboxPage();
    }

    function activateNewProject () {
        newProjectBox();
    }

    function closeProjectB () {
        closeProjectBox();
    }

    function newProjectSave () {
        let projectName = submitNewProject();
        makeProjectHeader(projectName);
        closeProjectBox();
    }

    function deleteTask (value) {
        deleteTaskBox(value);
    }


    projectHeader.addEventListener('click', activateProject);
    inboxText.addEventListener('click', activateInbox);
    addProjectText.addEventListener('click', activateNewProject);
    closeProject.addEventListener('click', closeProjectB);

    submitProject.addEventListener('click', newProjectSave);
    addProjectForm.addEventListener("submit", (e) => {e.preventDefault();});

    trashButton0.addEventListener("click", function(){deleteTask(0)});
    trashButton1.addEventListener("click", function(){deleteTask(1)});
    trashButton2.addEventListener("click", function(){deleteTask(2)});     
}
