//Show the "add new task" form

export default function showTaskBox() {
    document.getElementById(`newTaskCont`).style.display = "none";
    document.getElementsByClassName(`editTaskFormCont`).style.display = "grid";
}