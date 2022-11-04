import makeProjectPage from './projectPageLoad';
import makeInboxPage from './inboxPageLoad';
import refreshPage from './refreshPage';
import newProjectBox from './newProjectBox';


export default function menuSwitch() {
    const projectHeader = document.getElementById("projectHeader");
    const inboxText = document.getElementById("inboxText");
    const addProjectText = document.getElementById("addProjectText");

    function activateProject () {
        refreshPage();
        makeProjectPage();
    }

    function activateInbox () {
        refreshPage();
        makeInboxPage();
    }

    function activateNewProject () {
        console.log("test");
        newProjectBox();
    }

    projectHeader.addEventListener('click', activateProject);
    inboxText.addEventListener('click', activateInbox);
    addProjectText.addEventListener('click', activateNewProject);
}
