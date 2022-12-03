//Show the "edit new task" form

export default function showTaskBox(boxNo) {
    console.log("showTaskBox")
    document.getElementById(`${boxNo}editCont`).style.display = "grid";
}