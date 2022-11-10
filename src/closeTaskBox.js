export default function closeTaskBox() {
    document.getElementById(`newTaskCont`).style.display = "grid"
    document.getElementById(`taskFormCont`).style.display = "none"
    document.getElementById('tName').value = "";
    document.getElementById('shortDescLabel').value = "";
}