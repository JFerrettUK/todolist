//Close the "add task" form

export default function closeTaskBox() {
    document.getElementById(`newTaskCont`).style.display = "grid"
    document.getElementById(`taskFormCont`).style.display = "none"
}