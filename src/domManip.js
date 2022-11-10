import makeProjectPage from './projectPageLoad';
import makeInboxPage from './inboxPageLoad';
import refreshPage from './refreshPage';
import showProjectBox from './showProjectBox';
import closeProjectBox from './closeProjectBox';
import submitNewProject from './submitNewProject';
import makeProjectHeader from './makeProjectHeader';
import deleteTaskBox from './deleteTaskBox';
import showTaskBox from './showTaskBox';
import closeTaskBox from './closeTaskBox';
import makeInputToTask from './makeInputToTask';

export default function domManip() {
    const projectHeader = document.getElementById("projectHeader");
    const inboxText = document.getElementById("inboxText");
    const addProjectText = document.getElementById("addProjectText");
    const closeProject = document.getElementById("cancelButton");
    const submitProject = document.getElementById("submitButton");
    const addProjectForm = document.getElementById("addProjectForm");
    const newTaskCont = document.getElementById("newTaskCont");
    const taskCancelButton = document.getElementById("taskCancelButton");
    const addTaskForm = document.getElementById("addTaskForm");
    const submitTask = document.getElementById("taskSubmitButton");

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
        showProjectBox();
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

    function activateNewTask () {
        showTaskBox();
    }

    function closeTaskB () {
        closeTaskBox();
    }

    function makeInputToT() {
        const taskArray = ["taskName", "ProjectName", "Medium", "A test task", "09/12/2022"];
        makeInputToTask(taskArray)
    }


    projectHeader.addEventListener('click', activateProject);
    inboxText.addEventListener('click', activateInbox);
    addProjectText.addEventListener('click', activateNewProject);
    closeProject.addEventListener('click', closeProjectB);
    submitProject.addEventListener('click', newProjectSave);
    addProjectForm.addEventListener("submit", (e) => {e.preventDefault();});
    newTaskCont.addEventListener('click', activateNewTask);
    taskCancelButton.addEventListener('click', closeTaskB);
    submitTask.addEventListener('click', makeInputToT);

    trashButton0.addEventListener("click", function(){deleteTask(0)});
    trashButton1.addEventListener("click", function(){deleteTask(1)});
    trashButton2.addEventListener("click", function(){deleteTask(2)});     
}
