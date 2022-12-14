//Close the "add task" form

export default function closeEditBox(boxNo) {
    document.getElementById(`${boxNo}editCont`).style.display = "none"
}