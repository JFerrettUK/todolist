//Show the "edit new task" form

export default function showTaskBox(boxNo) {
    document.getElementById(`${boxNo}editCont`).style.display = "grid";
}