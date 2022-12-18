//Delete a task bar with the assigned number

export default function deleteTaskBox(boxNo) {
    document.getElementById(`${boxNo}Box`).style.display = "none"
    document.getElementById(`${boxNo}editCont`).style.display = "none"
    document.getElementById(`${boxNo}br`).style.display = "none"
}