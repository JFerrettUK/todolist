import makeProjectPage from './projectPageLoad';
import makeInboxPage from './inboxPageLoad';
import refreshPage from './refreshPage';
import newProjectBox from './newProjectBox';
import closeProjectBox from './closeProjectBox';
import submitNewProject from './submitNewProject';


export default function menuSwitch() {
    const projectHeader = document.getElementById("projectHeader");
    const inboxText = document.getElementById("inboxText");
    const addProjectText = document.getElementById("addProjectText");
    const closeProject = document.getElementById("cancelButton");
    const submitProject = document.getElementById("submitButton");


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
        closeProjectBox();
        submitNewProject();
    }

    projectHeader.addEventListener('click', activateProject);
    inboxText.addEventListener('click', activateInbox);
    addProjectText.addEventListener('click', activateNewProject);
    closeProject.addEventListener('click', closeProjectB);
    submitProject.addEventListener('click', newProjectSave);
}
