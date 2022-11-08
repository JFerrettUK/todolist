import makeProjectPage from './projectPageLoad';
import makeInboxPage from './inboxPageLoad';
import refreshPage from './refreshPage';
import newProjectBox from './newProjectBox';
import closeProjectBox from './closeProjectBox';
import submitNewProject from './submitNewProject';
import makeProjectHeader from './makeProjectHeader';

export default function domManip() {
    const projectHeader = document.getElementById("projectHeader");
    const inboxText = document.getElementById("inboxText");
    const addProjectText = document.getElementById("addProjectText");
    const closeProject = document.getElementById("cancelButton");
    const submitProject = document.getElementById("submitButton");
    const addProjectForm = document.getElementById("addProjectForm");

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
        console.log(projectName)
        makeProjectHeader(projectName);
        closeProjectBox();
    }

    projectHeader.addEventListener('click', activateProject);
    inboxText.addEventListener('click', activateInbox);
    addProjectText.addEventListener('click', activateNewProject);
    closeProject.addEventListener('click', closeProjectB);

    submitProject.addEventListener('click', newProjectSave);
    addProjectForm.addEventListener("submit", (e) => {e.preventDefault();});
}
